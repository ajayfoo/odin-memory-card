import { useEffect } from "react";

function App() {
  useEffect(() => {
    const printGifUrl = async () => {
      const pokeApiRes = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      const pokeJson = await pokeApiRes.json();
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/search?q=" +
          pokeJson.name +
          "&rating=pg-13" +
          "&api_key=" +
          import.meta.env.VITE_GIPHY_API_KEY
      );
      const json = await response.json();
      if (json.data.length === 2) return;
      console.log(pokeJson.name);
      console.log(json.data[1].url);
    };
    printGifUrl();
  });
  return <div>Pokemon</div>;
}

export default App;
