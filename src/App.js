import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokedexSection from "./components/PokedexSection";
import axios from "axios";
import TeamSection from "./components/TeamSection";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [team, setTeam] = useState([]);

  const getData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=903`).then((res) => {
      // console.log(res.data.results)
      let newList = res.data.results.map((pkmn, index) => {
        pkmn.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`;
        return pkmn;
      });
      setPokedex(newList);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const add = (pkmn) => {
    if (team.length < 6) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pkmn.name}`)
        .then((res) => {
          setTeam([...team, res.data]);
        });
    }
  };

  console.log(team)

  return (
    <div className="App">
      <Header />
      <TeamSection team={team} />
      <PokedexSection pokedex={pokedex} add={add}/>
    </div>
  );
}

export default App;
