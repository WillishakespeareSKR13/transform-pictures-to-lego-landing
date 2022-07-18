/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProducts, IQueryFilter } from 'graphql';
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
    const newCart = cart.filter((item) => (item.keyid ?? item.id) !== action);
    set(cartAtom, newCart);
  }
};

type IColor = {
  value: string;
  count: number;
  color: string;
  img: string;
  id: string;
  rest: number;
}[];

export type ICart = {
  id: string;
  keyid: string;
  type: 'BOARD' | 'PRODUCT';
  quantity: number;
  color?: IColor;
  board?: {
    id: string;
    board?: string;
    size?: string;
    pdf?: string;
  };
  boards?: IQueryFilter<'getBoards'>;
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
                id: cur?.product?.color?.id ?? '',
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
      const isBrick = bricks.find((item) => item.id === e.id);
      return {
        ...e,
        rest: isBrick ? e.count - isBrick?.quantity : e.count
      };
    })
);

export const setCartAtom = atom<ICart[], IAction>(
  (get) =>
    get(cartAtom).sort((a, b) => {
      if (a.type === 'BOARD' && b.type === 'PRODUCT') {
        return -1;
      }
      if (a.type === 'PRODUCT' && b.type === 'BOARD') {
        return 1;
      }
      return 0;
    }),
  (get, set, action) => {
    const { key, payload } = action;
    const getReducer = reducerAtom[key];
    getReducer?.(get, set, payload);
  }
);
