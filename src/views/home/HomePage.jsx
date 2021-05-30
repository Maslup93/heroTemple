import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useGet from "../../utils/useGet";
import NavBar from "../../layout/NavBar";
import Welcome from "./Welcome";
import Character from "../character/Character";
import CharList from "../character/charList/CharList";
import Search from "../../layout/Search";

const HomePage = ({ logout }) => {
  const [query, setQuery] = useState("chuck");
  const [data, setLoading, error] = useGet({
    url: `https://www.superheroapi.com/api.php/1111393692672065/search/${query}`,
  });





  return (
    <div>
      <NavBar logout={logout} />
      <Welcome />
      <Search getQuery={(q) => setQuery(q)} />
      <Container>
        <Row>
          {data.map((item) => {
            return <Character 
            name={item.name} 
            image={item.image.url}
            alignment={item.biography.alignment}
            race={item.appearance.race}
            intelligence={item.powerstats.intelligence}
            power={item.powerstats.power}
            combat={item.powerstats.combat}
            speed={item.powerstats.speed}
            durability={item.powerstats.durability}
            strength={item.powerstats.strength}
            height={item.height}
            weight={item.weight}
            eyeColor={item.appearance}
            occupation={item.work.occupation}
            base={item.work.base}
            groupaffiliation={item.connections}
            relatives={item.connections.relatives}
            fullName={item.biography[0]}
            alterEgos={item.biography[1]}
            aliases={item.biography[2]}
            placeOfBirth={item.biography[3]}
            firstAppearance={item.biography[4]}
            publisher={item.biography[5]} />;
          })}
        </Row>
      </Container>

      <CharList />
    </div>
  );
};

export default HomePage;
