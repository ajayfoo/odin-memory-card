import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import { getPokemonCardInfo } from "./utils";

const NUM_OF_CARDS = 15;

function App() {
  const [pokemonInfos, setPokemonInfos] = useState([]);
  useEffect(() => {
    const populatePokemonInfos = async () => {
      const temp = [];
      for (let i = 1; i <= NUM_OF_CARDS; ++i) {
        const info = await getPokemonCardInfo(i);
        temp.push(info);
      }
      setPokemonInfos(temp);
    };
    populatePokemonInfos();
  }, []);
  return <Grid infos={pokemonInfos} />;
}

export default App;
