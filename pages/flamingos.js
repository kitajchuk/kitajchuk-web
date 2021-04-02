import Layout from '../components/layout';
import { createDecks } from '../lib/flamingos/tools';
import { useEffect, useState } from 'react';

export default function FlamingOs() {
  const [decks, setDecks] = useState(null);

  useEffect(() => {
    if (!decks) {
      setDecks(createDecks());

    } else {
      console.log(decks);
    }
  });

  const onClickShuffle = () => {
    setDecks(createDecks());
  };

  return (
    <Layout>
      {decks && Object.keys(decks).map((key) => {
        return (
          <>
            <div className="ctrls">
              <button onClick={onClickShuffle}>Shuffle Decks</button>
            </div>
            <div className="deck" key={key}>
              <img src={decks[key].back} key="back" />
              {decks[key].cards.map((card) => {
                return <img src={card.asset} key={card.id} />
              })}
            </div>
          </>
        );
      })}
    </Layout>
  )
}