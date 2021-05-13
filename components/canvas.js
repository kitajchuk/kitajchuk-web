import { useRef, useEffect, useCallback } from 'react';

export default function Canvas({source}) {
  const imagesRef = useRef([]);
  const canvasRef = useRef();
  const blitRef = useRef();
  const sourceRef = useRef();
  const config = {
    fps: 24,
    len: 43,
  };

  // Latest and greatest `source` for canvas render...
  sourceRef.current = source;

  const clear = (ctx) => {
    ctx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const draw = (ctx, img) => {
    ctx.drawImage(
      img,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const handleBlit = useCallback((f) => {
    if (canvasRef.current && imagesRef.current.length) {
      const idx = (f % config.len);
      const ctx = canvasRef.current.getContext('2d');
      
      clear(ctx);
      draw(ctx, imagesRef.current[idx][sourceRef.current]);
    }
  }, [canvasRef, sourceRef, imagesRef]);

  const loadImageSet = (obj) => {
    return new Promise((resolve) => {
      const img1 = new Image();
      const img2 = new Image();
      const done = () => {
        if (obj.bw === img1 && obj.retro === img2) {
          resolve(obj);
        }
      };

      img1.onload = () => {
        obj.bw = img1;
        done();
      };

      img2.onload = () => {
        obj.retro = img2;
        done();
      };

      img1.src = obj.bw;
      img2.src = obj.retro;
    });
  };

  useEffect(() => {
    if (!imagesRef.current.length) {
      const imgs = [];
      const pros = [];

      for (let i = 1; i <= config.len; ++i) {
        let idx = i;

        if (idx < 10) {
          idx = `0${idx}`;
        }

        const pro = loadImageSet({
          bw: `/img/kickflip/bw/kickflip_${idx}.png`,
          retro: `/img/kickflip/retro/kickflip_${idx}.png`
        });

        ((index) => {
          pro.then((res) => {
            imgs[index] = res;
          });
        })(i - 1);

        pros.push(pro);
      }

      Promise.all(pros).then(() => {
        imagesRef.current = imgs;
      });
    }
  });

  useEffect(() => {
    import('properjs-blit').then((Blit) => {
      console.log('new blit');
      blitRef.current = new Blit.default({
        fps: config.fps,
        paused: true,
      });

      blitRef.current.blit(handleBlit);

      blitRef.current.start().play();
    });

    return function cleanup() {
      if (blitRef.current) {
        blitRef.current.stop();
      }
    };
  });

  return (
    <div className="vid">
      <canvas ref={canvasRef} width="1920" height="1080"></canvas>
    </div>
  );
}