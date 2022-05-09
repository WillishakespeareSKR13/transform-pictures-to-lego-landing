/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from 'graphql-request';
import { COLORTYPE } from '@Src/config';
import { Dispatch, SetStateAction } from 'react';
import Pixel from '@Utils/pixelitJS';
import { brick } from './legobricks';
import { IColor, IQueryFilter } from 'graphql';

const query = `query getColors{
  getColors{
    id
    color
    name
    icon
  }
}`;

const createImage = (src: string) => {
  const image = new Image();
  image.setAttribute('src', src);
  return image;
};

type IColorWithIcon = IColor & { canvas: HTMLImageElement };

export const cropAndFilter = async (
  blob: string,
  setState: Dispatch<
    SetStateAction<
      {
        id: number;
        image: string;
      }[]
    >
  >,
  splitx: number,
  splity: number,
  setStateLoading: Dispatch<SetStateAction<boolean>>,
  setColors: Dispatch<SetStateAction<COLORTYPE[]>>,
  isPortrait: boolean
) => {
  const color = (await request<IQueryFilter<'getColors'>>(
    '/api/graphql',
    query
  ).then((e) => {
    const arrayPromise = e?.getColors?.map(async (color) => {
      const loadImage = (url: string) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.setAttribute('src', url);
          img.setAttribute('crossOrigin', '*');
          img.addEventListener('load', () => resolve(img));
          img.addEventListener('error', (err) => reject(err));
        });

      return {
        ...color,
        canvas: (await loadImage(
          'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/LGO-0001/store/f5ce-4889-a486-4b9f7a3fbea1-Bat-Black.png'
        )) as HTMLImageElement
      };
    });

    return Promise.all(arrayPromise as any);
  })) as IColorWithIcon[];
  setStateLoading(true);
  const blobcreateImage = createImage(blob);
  setState([]);
  setColors([]);
  blobcreateImage.addEventListener('load', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const w2 = 400;
    const h2 = 400;
    canvas.width = w2;
    canvas.height = h2;
    // const base = Math.pow(2, 2 + (splitx + splity) / 2);
    // const factor = (10 * 0.1) / base;
    // const factor = 400 * sizes;
    // const size = 400 * ((5 * 0.05) / ((8 + splitx - 1) * splitx - 1));
    // const size = w2 * ((splitx * factor) / 2);
    const blendMode = 'normal';
    const small = { height: h2, width: w2 };
    // const small = { height: h2, width: w2 };
    const corrd = Array.from({ length: splity }, (_, a1i) => a1i)
      .map((ai) =>
        Array.from({ length: splitx }, (_, a2i) => a2i).map((bi) => ({
          x: w2 * bi,
          y: h2 * ai
        }))
      )
      .flat();
    const getArray = Array.from({ length: splity * splitx }, (_, i) => i).map(
      (i) => {
        // setState((state) => [...new Set([...state, url])]);
        // console.log(url);
        // context.imageSmoothingEnabled = false;
        const x = -corrd[i].x;
        const y = -corrd[i].y;
        context.drawImage(
          blobcreateImage,
          0,
          0,
          small.width * 1,
          small.height * 1
        );
        context.rect(0, 0, w2, h2);
        context.drawImage(
          canvas,
          0,
          0,
          small.width * 1,
          small.height * 1,
          x,
          y,
          w2 * splitx,
          h2 * splity
        );

        return canvas.toDataURL('image/png');

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         height="${h2}" width="${w2}">
                         <defs>
                           <pattern id="bricks" patternUnits="userSpaceOnUse" width="${
                             (800 - 87.5 * ((splitx + splity) / 2 - 2)) *
                             0.03125
                           }" height="${
          (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
        }">
                               <image xlink:href="${brick}" width="${
          (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
        }" height="${
          (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
        }" x="0" y="0" />
                           </pattern>
                       </defs>
                       <g transform="scale(${1})">
                           <image width="${w2}" height="${h2}" x="0" y="0" xlink:href="${canvas.toDataURL()}" />
                           <rect style="mix-blend-mode: ${blendMode}" fill="url(#bricks)" x="0" y="0" width="${w2}" height="${h2}" />
                       </g>
                       </svg>`;
        const imagesvg = `data:image/svg+xml;base64,${btoa(svg)}`;
        // const imagesvg = canvas.toDataURL();
        return imagesvg;
      }
    );
    getArray.map((image, idx) => {
      const imgElement = createImage(image);
      imgElement.addEventListener('load', () => {
        const canvas2 = document.createElement('canvas');
        const context2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
        canvas2.width = w2;
        canvas2.height = h2;
        context2.drawImage(imgElement, 0, 0);
        const mypalette = color?.map((c) => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            c?.color ?? ''
          ) ?? ['0', '0', '0'];

          return {
            id: c?.id,
            color: [
              parseInt(result[1], 16),
              parseInt(result[2], 16),
              parseInt(result[3], 16)
            ],
            value: c?.color ?? ''
          };
        });
        const config = {
          to: canvas2,
          from: imgElement,
          scale: isPortrait ? 12.5 : 8,
          palette: mypalette?.map((c: any) => c.color)
        };
        // console.log(mypalette);
        const px = new Pixel(config);
        px.draw().pixelate().convertPalette().saveImage();
        const size = isPortrait ? 8 : 12.5;

        const data = context2.getImageData(0, 0, w2, h2).data;
        // console.log(data.length);

        function rgb2hex(rgb: string) {
          const rgb2 = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) ?? [
            '0',
            '0',
            '0'
          ];
          function hex(x: string) {
            return ('0' + parseInt(x).toString(16)).slice(-2);
          }
          return '#' + hex(rgb2[1]) + hex(rgb2[2]) + hex(rgb2[3]);
        }

        const colorList: {
          id: string;
          hex: string;
        }[] = [];
        for (let i = 0, n = data.length; i < n; i += 4) {
          // const r = data[i];
          // const g = data[i + 1];
          // const b = data[i + 2];
          //If you need the alpha value it's data[i + 3]
          // const hex = rgb2hex('rgb(' + r + ',' + g + ',' + b + ')');

          const colorSim = (
            rgbColor: string | any[],
            compareColor: number[]
          ) => {
            let i;
            let max;
            let d = 0;
            for (i = 0, max = rgbColor.length; i < max; i++) {
              d +=
                (rgbColor[i] - compareColor[i]) *
                (rgbColor[i] - compareColor[i]);
            }
            return Math.sqrt(d);
          };

          const similarColor = (actualColor: number[], palette: any[]) => {
            let selectedColor: string[] = [];
            let currentSim = colorSim(actualColor, palette[0].color);
            let nextColor;
            let id = '';
            palette.forEach((color: any) => {
              nextColor = colorSim(actualColor, color.color);
              if (nextColor <= currentSim) {
                id = color.id;
                selectedColor = color.color;
                currentSim = nextColor;
              }
            });
            const hex = rgb2hex(
              'rgb(' +
                selectedColor[0] +
                ',' +
                selectedColor[1] +
                ',' +
                selectedColor[2] +
                ')'
            );
            return {
              id,
              hex
            };
          };
          colorList.push(
            similarColor([data[i], data[i + 1], data[i + 2]], mypalette ?? [])
          );
        }
        setColors((colorState) => [
          ...colorState,
          colorList.reduce((acc, curr) => {
            const isRepeat = acc[curr.hex] ? true : false;
            return {
              ...acc,
              [curr.hex]: {
                id: curr.id,
                color: curr.hex,
                value: curr.hex,
                count: isRepeat ? acc[curr.hex].count + 1 : 1,
                img: color?.find((c) => c?.id === curr?.id)?.icon ?? ''
              }
            };
          }, {} as COLORTYPE)
        ]);

        Array.from({ length: 32 }).map((_, idx) => {
          Array.from({ length: 32 }).map(async (_, idx2) => {
            //get section canvas and get color data from canvas

            const data = context2.getImageData(
              idx * 32,
              idx2 * 32,
              32,
              32
            ).data;
            const colorList: {
              id: string;
              hex: string;
            }[] = [];
            for (let i = 0, n = data.length / 4096; i < n; i += 4) {
              const colorSim = (
                rgbColor: string | any[],
                compareColor: number[]
              ) => {
                let i;
                let max;
                let d = 0;
                for (i = 0, max = rgbColor.length; i < max; i++) {
                  d +=
                    (rgbColor[i] - compareColor[i]) *
                    (rgbColor[i] - compareColor[i]);
                }
                return Math.sqrt(d);
              };

              const similarColor = (actualColor: number[], palette: any[]) => {
                let selectedColor: string[] = [];
                let currentSim = colorSim(actualColor, palette[0].color);
                let nextColor;
                let id = '';
                palette.forEach((color: any) => {
                  nextColor = colorSim(actualColor, color.color);
                  if (nextColor <= currentSim) {
                    id = color.id;
                    selectedColor = color.color;
                    currentSim = nextColor;
                  }
                });
                const hex = rgb2hex(
                  'rgb(' +
                    selectedColor[0] +
                    ',' +
                    selectedColor[1] +
                    ',' +
                    selectedColor[2] +
                    ')'
                );
                return {
                  id,
                  hex
                };
              };
              colorList.push(
                similarColor(
                  [data[i], data[i + 1], data[i + 2]],
                  mypalette ?? []
                )
              );
            }
            const colorID =
              [...new Set(colorList.map((c) => c.id))]?.[0] ??
              '6239a9a6c3476996d70f0eeb';
            const findColorImage =
              color?.find((c) => c?.id === colorID)?.canvas ??
              color?.[0]?.canvas;
            context2.imageSmoothingEnabled = true;
            if (findColorImage) {
              context2.drawImage(
                findColorImage,
                0,
                0,
                findColorImage.width,
                findColorImage.height,
                idx * (canvas2.width / 32),
                idx2 * (canvas2.height / 32),
                canvas2.width / 32,
                canvas2.height / 32
              );
            }
            //put image to canvas
          });
        });
        //put image into
        // const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        //                  height="${h2}" width="${w2}">
        //                  <defs>
        //                     <pattern id="bricks" patternUnits="userSpaceOnUse" width="${size}" height="${size}">
        //                           <image xlink:href="${brick}" width="${size}" height="${size}" x="0" y="0" />
        //                       </pattern>
        //                </defs>
        //                <g transform="scale(${1})">
        //                    <image width="${w2}" height="${h2}" x="0" y="0" xlink:href="${canvas2.toDataURL()}" />
        //                    <rect style="mix-blend-mode: ${blendMode}" fill="url(#bricks)" x="0" y="0" width="${w2}" height="${h2}" />
        //                </g>
        //                </svg>`;
        // const imagesvg = `data:image/svg+xml;base64,${btoa(svg)}`;
        const imagesvg = canvas2.toDataURL();
        // return imagesvg;
        const imgElement3 = createImage(imagesvg);
        imgElement3.addEventListener('load', () => {
          const canvas3 = document.createElement('canvas');
          const context3 = canvas3.getContext('2d') as CanvasRenderingContext2D;
          canvas3.width = w2;
          canvas3.height = h2;
          context3.drawImage(imgElement3, 0, 0);
          setState((state) =>
            [
              ...state,
              {
                id: idx,
                image: canvas3.toDataURL()
              }
            ].sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
          );

          // setState((state) => [...new Set([...state, canvas2.toDataURL()])]);
        });
        // setState((state) => [...state, imagesvg]);
      });
    });
    // console.log(getArray);
  });
  setStateLoading(false);
};
