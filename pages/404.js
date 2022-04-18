import Layout from '../src/components/layout';
import LazyImage from '../src/components/lazyimage';

export default function Page404() {
  const image = '/img/kitajchuk_hollow.png';
  return (
    <Layout preload={image}>
      <div className="hero">
        <LazyImage className="img" src={image} width="480" height="707" alt="Hollow Illustration" priority />
      </div>
    </Layout>
  );
}