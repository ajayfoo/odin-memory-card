export async function getPokemonCardInfo(id) {
  const pokeApiRes = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const pokeJson = await pokeApiRes.json();
  console.log(pokeJson.name);

  return {
    id: pokeJson.id,
    imgUrl:
      "https://picsum.photos/seed/" + Math.random().toString() + "/250.webp",
  };
}
