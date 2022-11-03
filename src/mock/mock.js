import { boxTwo, raridade } from './Pokemons';

const boxone = () => {
  const minAtt = 0;
  const maxAtt = 99;
  const randAtt = minAtt + Math.round(Math.random() * (maxAtt - minAtt));

  const minDef = 0;
  const maxDef = 99;
  const randDef = minDef + Math.round(Math.random() * (maxDef - minDef));

  const minHp = 0;
  const maxHp = 99;
  const randHp = minHp + Math.round(Math.random() * (maxHp - minHp));

  const percent = 0.15;
  const random = Math.floor(Math.random() * boxTwo.length);
  const randomBoolean = Math.random() < percent;

  this.setState((prev) => ({
    name: boxTwo[random],
    attr1: randAtt,
    attr2: randDef,
    attr3: randHp,
    image: boxTwo[random],
    arrayCards: [...prev.arrayCards, prev],
    trunfo: randomBoolean,
    rare: raridade(),
  }), () => {
    const { image } = this.state;
    if (image) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${image.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => this.setState({
          id: data.id,
          imgUrl: data
            .sprites
            .versions['generation-v']['black-white'].animated.front_default,
        }))
        .catch(() => this.setState((previousState) => previousState));
    }
  });
};

export default boxone;
