import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import { getPokemonCardInfo } from "./utils";
import Header from "./components/Header";

const NUM_OF_CARDS = 15;

function App() {
  const [cardImgUrls, setCardImgUrls] = useState([]);
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    const populateCardImgUrls = async () => {
      const temp = [];
      for (let i = 1; i <= NUM_OF_CARDS; ++i) {
        const info = await getPokemonCardInfo(i);
        temp.push(info);
      }
      setCardImgUrls(temp);
    };
    populateCardImgUrls();
  }, []);

  const handleClick = (id) => {
    setCardImgUrls(
      cardImgUrls
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
    if (selectedCardIds.includes(id)) {
      setSelectedCardIds([]);
      setBestScore(Math.max(score, bestScore));
      setScore(0);
    } else {
      setSelectedCardIds([...selectedCardIds, id]);
      setScore(score + 1);
    }
  };
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Grid onCellClick={handleClick} infos={cardImgUrls} />
    </>
  );
}

export default App;
