import { useState, useRef, useEffect, useCallback } from 'react';

export default function Canvas({active}) {
  const [images, setImages] = useState([]);
  const canvasRef = useRef();
  const blitRef = useRef();
  const config = {
    fps: 24,
    len: 43,
  };

  const handleBlit = useCallback((f) => {
    if (canvasRef.current && images.length) {
      const idx = (f % config.len);
      const ctx = canvasRef.current.getContext('2d');

      ctx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      ctx.drawImage(
        images[idx],
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }
  }, [canvasRef, images]);

  const loadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        resolve(img);
      };

      img.src = src;
    });
  };

  useEffect(() => {
    if (!images.length) {
      const imgs = [];
      const pros = [];

      for (let i = 1; i <= config.len; ++i) {
        let idx = i;

        if (idx < 10) {
          idx = `0${idx}`;
        }

        const pro = loadImage(`/kickflip/kickflip_${idx}.png`);

        ((index) => {
          pro.then((img) => {
            imgs[index] = img;
          });
        })(i - 1);

        pros.push(pro);
      }

      Promise.all(pros).then(() => {
        setImages(imgs);
      });
    }
  });

  useEffect(() => {
    import('properjs-blit').then((Blit) => {
      blitRef.current = new Blit.default({
        fps: config.fps,
        paused: true,
      });

      blitRef.current.blit(handleBlit);

      if (active) {
        blitRef.current.start().play();

      } else {
        blitRef.current.stop();
      }
    });

    return function cleanup() {
      console.log('cleanup');
      if (blitRef.current) {
        blitRef.current.stop();
      }
    };
  }, [active]);

  return (
    <div class="vid">
      <canvas ref={canvasRef} width="1920" height="1080"></canvas>
    </div>
  );
};