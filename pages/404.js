import Layout from '../src/components/layout';
import LazyImage from '../src/components/lazyimage';

export default function Page404() {
  return (
    <Layout>
      <div className="hero">
        <LazyImage className="img" src="/img/kitajchuk_hollow.png" />
      </div>
    </Layout>
  );
}