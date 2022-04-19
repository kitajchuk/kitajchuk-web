const Image = ({
  src = '',
  alt = '',
  aspect = 75,
  priority = false,
  orientation = 'landscape',
  ...rest
}) => {
  return (
    <div className={`image image--${orientation}`}>
      <div className="image__fit" style={{paddingBottom: `${aspect}%`}}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="image__img"
          {...rest}
        />
      </div>
    </div>
  );
};

export default Image;
