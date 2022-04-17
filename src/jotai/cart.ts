/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProducts } from 'graphql';
import { atom, Setter, Getter } from 'jotai';

const reducerAtom = {
  SETCART: (_: Getter, set: Setter, action: ICart[]) => {
    set(cartAtom, action);
  },
  ADDCART: (get: Getter, set: Setter, action: ICart) => {
    const cart = get(cartAtom);
    const newCart = [...cart, action];
    set(cartAtom, newCart);
  },
  ADDQUANTITY: (get: Getter, set: Setter, action: string) => {
    const cart = get(cartAtom);
    const newCart = cart.map((item) => {
      if (item.id === action) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    set(cartAtom, newCart);
  },
  REMOVEQUANTITY: (get: Getter, set: Setter, action: string) => {
    const cart = get(cartAtom);
    const newCart = cart.map((item) => {
      if (item.id === action) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    set(cartAtom, newCart);
  },
  REMOVECART: (get: Getter, set: Setter, action: string) => {
    const cart = get(cartAtom);
    const newCart = cart.filter((item) => item.id !== action);
    set(cartAtom, newCart);
  }
};

type IColor = {
  value: string;
  count: number;
  color: string;
  id: string;
  rest: number;
}[];

export type ICart = {
  id: string;
  type: 'BOARD' | 'PRODUCT';
  quantity: number;
  color?: IColor;
  board?: {
    board?: string;
    size?: string;
    pdf?: string;
  };
  product?: IProducts;
};

type IAction = {
  key: keyof typeof reducerAtom;
  payload: any;
};

const cartAtom = atom<ICart[]>([]);

const bricksAtoms = atom((get) =>
  get(cartAtom)
    .filter((item) => item.type === 'PRODUCT')
    .reduce(
      (acc, cur) =>
        cur?.product?.color?.id
          ? [
              ...acc,
              {
                id: cur?.product?.color?.color ?? '',
                quantity: cur?.quantity * 50
              }
            ]
          : acc,
      [] as { id: string; quantity: number }[]
    )
);

export const colorsAtoms = atom((get) =>
  get(cartAtom)
    .reduce(
      (acc, item) => (item.color ? [...acc, ...item.color] : acc),
      [] as IColor
    )
    .reduce((acc, cur) => {
      const isExist = acc.find((item) => item.id === cur.id);
      return isExist
        ? acc.map((e) =>
            e.id === cur.id
              ? {
                  ...e,
                  count: e.count + cur.count
                }
              : e
          )
        : [...acc, cur];
    }, [] as IColor)
    .map((e) => {
      const bricks = get(bricksAtoms);
      const isBrick = bricks.find((item) => item.id === e.color);
      return {
        ...e,
        rest: isBrick ? e.count - isBrick?.quantity : e.count
      };
    })
);

export const setCartAtom = atom<ICart[], IAction>(
  (get) => get(cartAtom),
  (get, set, action) => {
    const { key, payload } = action;
    const getReducer = reducerAtom[key];
    getReducer?.(get, set, payload);
  }
);
