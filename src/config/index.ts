import { v4 } from 'uuid';

export type CONFIGKEYS = 'VERTICAL' | 'HORIZONTAL' | 'PORTRAIT' | 'SQUARE';
export type CONFIGKEYSSIZE =
  | 'SMALL'
  | 'MEDIUM'
  | 'LARGE'
  | 'XLARGE'
  | 'JUMBO'
  | 'PORTRAIT';

export type CROPPEDIMAGE = {
  id: number;
  image: string;
}[];

export type SELECTEDCONFIG = {
  id: string;
  aspect: number;
  title: string;
  key: string;
  x: number;
  y: number;
  isPortrait: boolean;
  size: {
    width: string;
    height: string;
  };
};

export type COLORTYPE = {
  [key: string]: {
    value: string;
    count: number;
    color: string;
    id: string;
    img: string;
  };
};

const CONFIG = [
  {
    id: v4(),
    key: 'SQUARE',
    name: 'Square',
    icon: {
      width: '40px',
      height: '40px'
    },

    sizes: [
      {
        id: v4(),
        aspect: 3 / 3,
        title:
          'Small -  2 x 2 (4 total boards) 51.20cm x 51.20cm / 20.16in x 20.16in $280 Dll',
        key: 'SMALL',
        x: 2,
        y: 2,
        isPortrait: false,
        size: {
          width: '600px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 3 / 3,
        title:
          'Medium - 3 x 3 (9 total boards) 76.80cm x 76.80cm / 30.24in x 30.24in $420 Dll',
        key: 'MEDIUM',
        x: 3,
        y: 3,
        isPortrait: false,
        size: {
          width: '600px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 3 / 3,
        title:
          'Large - 4 x 4 (16 total boards) 102.40cm x 102.40cm / 40.32in x 40.32in $1,120 Dll',
        key: 'LARGE',
        x: 4,
        y: 4,
        isPortrait: false,
        size: {
          width: '600px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 3 / 3,
        title:
          'XLarge - 5 x 5 (25 total boards) 128cm x 128cm / 50.40in x 50.40in $1,750 Dll',
        key: 'XLARGE',
        x: 5,
        y: 5,
        isPortrait: false,
        size: {
          width: '600px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 3 / 3,
        title:
          'Jumbo - 6 x 6 (36 total boards) 153.60cm x 153.60cm / 60.40in x 60.40in $2,520 Dll',
        key: 'JUMBO',
        x: 6,
        y: 6,
        isPortrait: false,
        size: {
          width: '600px',
          height: '600px'
        }
      }
    ]
  },
  {
    id: v4(),
    key: 'PORTRAIT',
    name: 'Portrait',
    icon: {
      width: '40px',
      height: '40px'
    },

    sizes: [
      {
        id: v4(),
        aspect: 3 / 3,
        title:
          'Portrait - 1 x 1 (1 total boards) 50 x 50 bricks and 40x40 cm $139 DLL',
        key: 'PORTRAIT',
        x: 1,
        y: 1,
        isPortrait: true,
        size: {
          width: '600px',
          height: '600px'
        }
      }
    ]
  }
];

export type ROOMSTYPES = {
  id: string;
  key: string;
  name: string;
  path: string;
  top: {
    VERTICAL: string;
    HORIZONTAL: string;
    SQUARE: string;
    PORTRAIT: string;
  };
  size: number;
};

export type ROOMSSIZESTYPE = {
  id: string;
  key: string;
  size: {
    width: string;
    height: string;
    max: number;
  };
};

export const ROOMSSIZES = [
  {
    id: v4(),
    key: 'VERTICAL',
    sizes: [
      {
        id: v4(),
        key: 'SMALL',
        size: {
          width: '140px',
          height: '200px',
          max: 210
        }
      },
      {
        id: v4(),
        key: 'MEDIUM',
        size: {
          width: '150px',
          height: '200px',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'LARGE',
        size: {
          width: '120px',
          height: '200',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'XLARGE',
        size: {
          width: '160px',
          height: '200px',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'JUMBO',
        size: {
          width: '140px',
          height: '200px',
          max: 210
        }
      }
    ]
  },
  {
    id: v4(),
    key: 'HORIZONTAL',
    sizes: [
      {
        id: v4(),
        key: 'SMALL',
        size: {
          width: '200px',
          height: '133px',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'MEDIUM',
        size: {
          width: '200px',
          height: '150px',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'LARGE',
        size: {
          width: '200px',
          height: '120px',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'XLARGE',
        size: {
          width: '200px',
          height: '160px',
          max: 200
        }
      },
      {
        id: v4(),
        key: 'JUMBO',
        size: {
          width: '200px',
          height: '130px',
          max: 200
        }
      }
    ]
  },
  {
    id: v4(),
    key: 'SQUARE',
    sizes: [
      {
        id: v4(),
        key: 'SMALL',
        size: {
          width: '180px',
          height: '180px',
          max: 180
        }
      },
      {
        id: v4(),
        key: 'MEDIUM',
        size: {
          width: '180px',
          height: '180px',
          max: 180
        }
      },
      {
        id: v4(),
        key: 'LARGE',
        size: {
          width: '180px',
          height: '180px',
          max: 180
        }
      },
      {
        id: v4(),
        key: 'XLARGE',
        size: {
          width: '180px',
          height: '180px',
          max: 180
        }
      },
      {
        id: v4(),
        key: 'JUMBO',
        size: {
          width: '180px',
          height: '180px',
          max: 180
        }
      }
    ]
  },
  {
    id: v4(),
    key: 'PORTRAIT',
    sizes: [
      {
        id: v4(),
        key: 'PORTRAIT',
        size: {
          width: '180px',
          height: '180px',
          max: 180
        }
      }
    ]
  }
];

export const ROOMS: ROOMSTYPES[] = [
  {
    id: v4(),
    key: 'DEFAULT',
    name: 'Full Screen',
    path: '',
    top: {
      VERTICAL: '',
      HORIZONTAL: '',
      SQUARE: '',
      PORTRAIT: ''
    },
    size: 0
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_1',
    name: 'Room 1',
    path: '/rooms/1.jpg',
    top: {
      VERTICAL: '200px',
      HORIZONTAL: '200px',
      SQUARE: '200px',
      PORTRAIT: '200px'
    },
    size: 150
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_2',
    name: 'Room 2',
    path: '/rooms/2.jpg',
    top: {
      VERTICAL: '160px',
      HORIZONTAL: '170px',
      SQUARE: '160px',
      PORTRAIT: '160px'
    },
    size: 150
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_3',
    name: 'Room 3',
    path: '/rooms/3.jpg',
    top: {
      VERTICAL: '180px',
      HORIZONTAL: '180px',
      SQUARE: '160px',
      PORTRAIT: '160px'
    },
    size: 150
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_4',
    name: 'Room 4',
    path: '/rooms/4.jpg',
    top: {
      VERTICAL: '210px',
      HORIZONTAL: '220px',
      SQUARE: '210px',
      PORTRAIT: '210px'
    },
    size: 150
  }
];

export default CONFIG;
