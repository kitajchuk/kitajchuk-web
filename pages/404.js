import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';

export default function Page404() {
  return (
    <Layout>
      <div className="hero">
        <AsyncImage className="img" src="/img/kitajchuk_hollow.png" />
      </div>
    </Layout>
  );
}