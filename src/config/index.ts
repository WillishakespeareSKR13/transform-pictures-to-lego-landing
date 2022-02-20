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
  [key: string]: { value: string; count: number; color: string };
};

const CONFIG = [
  {
    id: v4(),
    key: 'VERTICAL',
    name: 'Vertical',
    icon: {
      width: '40px',
      height: '60px'
    },
    sizes: [
      {
        id: v4(),
        aspect: 2 / 3,
        title:
          'Small - 2 x 3 (6 total boards) 51.20cm x 76.80cm / 20.16in x 30.24in $420 Dll',
        key: 'SMALL',
        x: 2,
        y: 3,
        isPortrait: false,
        size: {
          width: '400px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 3 / 4,
        title:
          'Medium - 3 x 4 (12 total boards) 76.80cm x 102.40cm / 30.24in x 40.32in $840 Dll',
        key: 'MEDIUM',
        x: 3,
        y: 4,
        isPortrait: false,
        size: {
          width: '450px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 3 / 5,
        title:
          'Large - 3 x 5 (15 total boards) 76.80cm x 128cm / 30.24in x 50.40in $1,050 Dll',
        key: 'LARGE',
        x: 3,
        y: 5,
        isPortrait: false,
        size: {
          width: '360px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 4 / 5,
        title:
          'XLarge - 4 x 5 (20 total boards) 102.40cm x 128cm / 40.32in x 50.40in $1,400 Dll',
        key: 'XLARGE',
        x: 4,
        y: 5,
        isPortrait: false,
        size: {
          width: '480px',
          height: '600px'
        }
      },
      {
        id: v4(),
        aspect: 4 / 6,
        title:
          'Jumbo - 4 x 6 (24 total boards) 102.40cm x 153.60cm / 40.32in x 60.48in $1,750 Dll',
        key: 'JUMBO',
        x: 4,
        y: 6,
        isPortrait: false,
        size: {
          width: '400px',
          height: '600px'
        }
      }
    ]
  },
  {
    id: v4(),
    key: 'HORIZONTAL',
    name: 'Horizontal',
    icon: {
      width: '60px',
      height: '40px'
    },

    sizes: [
      {
        id: v4(),
        aspect: 3 / 2,
        title:
          'Small - 3 x 2 (6 total boards) 76.80cm x 51.20cm / 30.24in x 20.16in $420 Dll',
        key: 'SMALL',
        x: 3,
        y: 2,
        isPortrait: false,
        size: {
          width: '600px',
          height: '400px'
        }
      },
      {
        id: v4(),
        aspect: 4 / 3,
        title:
          'Medium - 4 x 3 (12 total boards) 102.40cm x 76.80cm / 40.32in x 30.24 $840 Dll',
        key: 'MEDIUM',
        x: 4,
        y: 3,
        isPortrait: false,
        size: {
          width: '600px',
          height: '450px'
        }
      },
      {
        id: v4(),
        aspect: 5 / 3,
        title:
          'Large - 5 x 3 (15 total boards) 128cm x 76.80cm / 50.40in x 30.24in $1,050 Dll',
        key: 'LARGE',
        x: 5,
        y: 3,
        isPortrait: false,
        size: {
          width: '600px',
          height: '360px'
        }
      },
      {
        id: v4(),
        aspect: 5 / 4,
        title:
          'XLarge - 5 x 4 (20 total boards) 128cm x 102.40cm / 50.40in x 40.32in $1,400 Dll',
        key: 'XLARGE',
        x: 5,
        y: 4,
        isPortrait: false,
        size: {
          width: '600px',
          height: '480px'
        }
      },
      {
        id: v4(),
        aspect: 6 / 4,
        title:
          'Jumbo - 6 x 4 (24 total boards) 153.60cm x 102.40cm / 60.48in x 40.32in $1,750 Dll',
        key: 'JUMBO',
        x: 6,
        y: 4,
        isPortrait: false,
        size: {
          width: '600px',
          height: '400px'
        }
      }
    ]
  },
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

export const ROOMS: ROOMSTYPES[] = [
  {
    id: v4(),
    key: 'LIVING_ROOM_1',
    name: 'Room 1',
    path: '/rooms/1.jpg',
    top: {
      VERTICAL: '100px',
      HORIZONTAL: '140px',
      SQUARE: '100px',
      PORTRAIT: '100px'
    },
    size: 160
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_2',
    name: 'Room 2',
    path: '/rooms/2.jpg',
    top: {
      VERTICAL: '60px',
      HORIZONTAL: '100px',
      SQUARE: '60px',
      PORTRAIT: '60px'
    },
    size: 160
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_3',
    name: 'Room 3',
    path: '/rooms/3.jpg',
    top: {
      VERTICAL: '70px',
      HORIZONTAL: '110px',
      SQUARE: '60px',
      PORTRAIT: '60px'
    },
    size: 160
  },
  {
    id: v4(),
    key: 'LIVING_ROOM_4',
    name: 'Room 4',
    path: '/rooms/4.jpg',
    top: {
      VERTICAL: '110px',
      HORIZONTAL: '150px',
      SQUARE: '120px',
      PORTRAIT: '120px'
    },
    size: 160
  }
];

export default CONFIG;
