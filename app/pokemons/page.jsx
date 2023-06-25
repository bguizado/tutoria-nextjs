import Link from "next/link";
import Button from "../components/Button";

const fetchPokemons = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.results;
};

export default async function Pokemons() {
  const pokemons = await fetchPokemons();
  console.log(pokemons);
  return(
  <>
    <div>Pokemon page</div>
    <Button />
    <ol>
      {pokemons.map((pokemon) => {
        return <li key={pokemon.name}>
            <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
      })}
    </ol>
  </>
  )
}
