type CUR = {
  [key: string]: (e: number) => number;
};

type CURTC = {
  [key: string]: (e: number, i: string) => number;
};

type TCIT = (e?: string, x?: string, i?: number) => number;

const MNX: CUR = {
  USD: (value) => value * 21,
  MNX: (value) => value,
  DEFAULT: () => 0
};

const USD: CUR = {
  USD: (value) => value,
  MNX: (value) => value / 21,
  DEFAULT: () => 0
};

const TC: CURTC = {
  USD: (value, currency) => USD[currency ?? 'DEFAULT'](value ?? 0),
  MNX: (value, currency) => MNX[currency ?? 'DEFAULT'](value ?? 0),
  DEFAULT: () => 0
};

export const TCINIT: TCIT = (e, x, i) =>
  TC[e ?? 'DEFAULT'](i ?? 0, x ?? 'DEFAULT');
