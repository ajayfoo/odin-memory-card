export async function getPokemonCardInfo(id) {
  const pokeApiRes = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const pokeJson = await pokeApiRes.json();
  console.log(pokeJson.name);
  //   const giphyRes = await fetch(
  //     "https://api.giphy.com/v1/gifs/search?q=" +
  //       pokeJson.name +
  //       "&rating=pg-13" +
  //       "&api_key=" +
  //       import.meta.env.VITE_GIPHY_API_KEY
  //   );
  //   const giphyJson = await giphyRes.json();
  //   if (giphyJson.data.length === 2) return;
  //   console.log(giphyJson.data[1].url);
  //   console.log(giphyJson);
  return {
    id: pokeJson.id,
    title: pokeJson.name,
    // gifUrl: giphyJson.data[1].images.original.webp,
    gifUrl: "",
  };
}
