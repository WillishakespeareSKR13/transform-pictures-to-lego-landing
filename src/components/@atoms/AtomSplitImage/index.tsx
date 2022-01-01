import React, { FC, useEffect, useRef, useState } from 'react';

interface AtomImageSplitType {
  image: any;
}

const AtomImageSplit: FC<AtomImageSplitType> = (props) => {
  const { image } = props;
  const canvas = useRef(null);
  const [imageCanvas, setimageCanvas] = useState<HTMLImageElement>();
  //   const parts: any[] = [];
  const [parts, setParts] = useState<string[]>([]);
  //   const img = new Image();

  //   var img = new Image();
  //   img.onload = split_4;
  useEffect(() => {
    const imageObj1 = new Image();
    const blob = new Blob([image], { type: 'image/png' });
    console.log(`image component`, image);
    if (image !== '') {
      imageObj1.src = URL.createObjectURL(image);
      // imageObj1.src =
      //   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABQCAYAAAD/YAtfAAAD6klEQVR4nO3c6Y0jIRCGYWdCKIRCKIRCKIRCKLU/dlxdzdDQF7ZHfkt6pB3uktbfzmqPhzxEAEAeIo93PwDA5yAQACgCAYAiEAAoAgGAIhAAKAIBgCIQACgCAYAiEAAoAgGAIhAAKAIBgCIQACgCAYAiEAAoAgGAIhAAKAIBgCIQACgCAYAiEAAoAgGAIhAAKAIBgCIQACgCAYAiEAAoAgGAIhAAKAJhJiciSUSK/K8iIuHA/vRzxrv7OMOLSJal8s/Yu9+FLgJhFidLENSVduxPZn0YrI2yDp345t7DRt+jXj6tjy9EIMxSZKki6w+4yPiDYfe6ztos7Spv6ttX70iN3v0f6ONLEQgzBFkq7xi3vKzLd+5JZl2R9W9PRPZ9J3I3+6ZoxmPnXZ/Yx5ciEGbwsvyEdtWcrdbebOZj5w5XneUG46/y7Lu+276r/IE+vhSBMJOvvnayrnp9MHN5cLZdm6q5ZObCi3vu9dea+9Q+vhSB8EpBliqN+WLm/eCsZNaGzj1px7tsZTOeq7k9Pdo9tge/ccedfeAyAuFVnKw/8LGaj2Yuyf8PkO+cZ89yjbueVXa8rS63Mb6nz2DW55+znKyDIkzqA5cRCK+SZV2umi9mzv44N9bW6+t5V501eluU3x/YUL0hHug1ynbV59zZBy4jEF4hyrpiNe+lX7lxpq3WnaP5mqvuS+Zrd7BfJ+0/RsyNs+7uA5cQCLN5WVdurInVmiTjv7dgq3XvaL6lvvP5lqM9l6rfbL4uL+gDpxEIsxVZl2usyWY+mfFkxnO1x1br3tF8i5Pf1XpvT9jRS5zcB04jEGaKsq6wsa6YNd6MezNeOntcNec6+0ay2ZtP9Gz3b/Viz53VB04hEGZxsq7UWWtr71wx465zd7nw5tbZI0d7mdEHTiMQZkmyVBmstbV3zp4fqrlg5tKBN0f5XfFg30d7mdEHTiMQZrHlB2vLxlpvxku1J5q5VM0lMxd3vteZPVnW3/q7A30f7eXuPnAJgTBDkKXyjvXJrE87xh9y/78BiGZPqHqIB3q352z1Ys+7uw9cQiDMkGWpLMsfI1rRrHeyrizjv8j0kPv+lWCs7nqO26rfvOVML3f1gcsIhBn2lt0TOuti566ysafI/l9VbSUzngZv3tLrJUzsA5cRCDMU2Vf1Pi/n/tuxaO4scvy/XrNl7/M73rzlTC9X+8BlBAIARSAAUAQCAEUgAFAEAgBFIABQBAIARSAAUAQCAEUgAFAEAgBFIABQBAIARSAAUAQCAEUgAFAEAgBFIABQBAIARSAAUAQCAEUgAFAEAgBFIABQBAIARSAAUAQCAEUgAFAEAgD1DxOuXDVQeFT8AAAAAElFTkSuQmCC';
      imageObj1.onload = () => setimageCanvas(imageObj1);
    }
  }, []);

  useEffect(() => {
    if (imageCanvas && canvas !== null) {
      const context = canvas?.current?.getContext('2d');
      context.drawImage(imageCanvas, 0, 0, 300, 300);
      //   console.log(context);
      const canvas2 = document.createElement('canvas');
      const ctx = canvas2.getContext('2d');
      const w2 = imageCanvas.width / 2,
        h2 = imageCanvas.height / 2;

      for (let i = 0; i < 4; i++) {
        const x = (-w2 * i) % (w2 * 2),
          y = h2 * i <= h2 ? 0 : -h2;

        canvas2.width = w2;
        canvas2.height = h2;

        ctx.drawImage(imageCanvas, x, y, w2 * 2, h2 * 2); // img, x, y, w, h
        console.log(`canvas ${i}`, canvas2.toDataURL());
        console.log(`canvas ${i}`, parts);
        parts.push(canvas2.toDataURL());
        // setParts([...parts, canvas2.toDataURL()]);
        console.log(`canvas ${i}`, parts);
      }
    }
  }, [imageCanvas, canvas]);
  console.log(parts);
  return (
    <div>
      <canvas ref={canvas} width={400} height={400}></canvas>;
      {parts.map((part, index) => (
        <img
          key={index}
          src={part}
          alt="sliced"
          //   style={{ width: '200px', height: '200px', margin: '10px' }}
        />
      ))}
    </div>
  );
};
export default AtomImageSplit;
