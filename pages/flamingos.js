import { useEffect, useState } from 'react';

import Layout from '../components/layout';
import { createDecks } from '../lib/flamingos/tools';

export default function FlamingOs() {
  const [decks, setDecks] = useState(null);

  useEffect(() => {
    if (!decks) {
      setDecks(createDecks());

    } else {
      console.log(decks);
    }
  }, [decks]);

  const onClickShuffle = () => {
    setDecks(createDecks());
  };

  return (
    <Layout title="flamingOs">
      {decks && Object.keys(decks).map((key) => {
        return (
          <div key={key}>
            <div className="ctrls">
              <button onClick={onClickShuffle}>Shuffle Decks</button>
            </div>
            <div className="deck">
              <img src={decks[key].back} key="back" />
              {decks[key].cards.map((card) => {
                return <img src={card.asset} key={card.id} />;
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
}