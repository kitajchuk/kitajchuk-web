import Layout from '../components/layout';
import Canvas from '../components/canvas';

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <div className="cvs">
          <Canvas source="bw" />
        </div>
      </div>
    </Layout>
  );
}