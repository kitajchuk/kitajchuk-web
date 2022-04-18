const LazyImage = ({ src = '', alt = '', priority = false, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      {...rest}
    />
  );
};

export default LazyImage;
