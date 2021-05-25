import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <AsyncImage src="/img/kitajchuk_hero.png" />
      </div>
    </Layout>
  );
}