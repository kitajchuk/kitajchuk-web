import decks from './decks';
import { nanoid } from 'nanoid';

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

// raw copy an object literal...
function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function getDeck(key) {
  const deck = copy(decks[key]);
  const ret = {
    back: deck.cardBack,
    cards: [],
  };

  deck.cardTypes.forEach((cardType) => {
    const { name, asset, value } = cardType;

    for (let i = 0; i < cardType.total; ++i) {
      const id = nanoid();

      ret.cards.push({
        id,
        name,
        asset,
        value,
      });
    }
  });

  shuffle(shuffle(ret.cards).reverse());

  return ret;
}

export function createDecks() {
  const mingos = getDeck('mingo');
  const shrimp = getDeck('shrimp');
  const flames = getDeck('flame');

  return {
    mingos,
    shrimp,
    flames,
  };
}