const LazyImage = ({ src = '', alt = '', ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      {...rest}
    />
  );
};

export default LazyImage;
