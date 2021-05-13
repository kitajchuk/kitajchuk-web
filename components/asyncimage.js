import { useEffect, useRef } from 'react';

const AsyncImage = ({src}) => {
  const imageRef = useRef();

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      imageRef.current.src = img.src;
    };

    img.src = src;

  }, [src]);

  return <img ref={imageRef} />;
};

export default AsyncImage;

// HOC
// Usage: export default withAnimate(SomeComponent);
// https://reactjs.org/docs/higher-order-components.html
export function withImageLoader(WrappedComponent) {
  return function WrapperComponent({...props}) {
    const loaderRef = useRef();
    const imagesRef = useRef();

    useEffect(() => {
      import('properjs-imageloader').then((ImageLoader) => {
        imagesRef.current = document.querySelectorAll('img[data-src]');
        loaderRef.current = new ImageLoader.default({
          elements: imagesRef.current,
          executor: (el) => {
            const bounds = el.getBoundingClientRect();
            return (bounds.top < (window.innerHeight * 2) && bounds.bottom > 0);
          },
        });

        loaderRef.current.on('done', () => {
          console.log('all done');
        });
      });
  
      return function cleanup() {
        if (loaderRef.current) {
          loaderRef.current.stop();
        }
      };
    });

    return (
      <WrappedComponent {...props} />
    );
  };
}