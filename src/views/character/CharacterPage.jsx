import React, { useState } from "react";
import Search from "../../layout/Search";
import useGet from "../../utils/useGet";
import Character from "./Character";
import { Container, Row } from "react-bootstrap";
import "./character.css";

const CharacterPage = () => {
  const [query, setQuery] = useState("chuck");
  const [data, error] = useGet({
    url: `https://www.superheroapi.com/api.php/1111393692672065/search/${query}`,
  });

  return (
    <div>
      <Search getQuery={setQuery} />

      <Container>
        <Row>
          {data.map((item) => {
            return (
              <div>
                <Character
                  name={item.name}
                  intelligence={item.powerstats.intelligence}
                  strength={item.powerstats.strength}
                  speed={item.powerstats.speed}
                  durability={item.powerstats.durability}
                  power={item.powerstats.power}
                  combat={item.powerstats.combat}
                  image={item.image.url}
                  gender={item.appearance.gender}
                  race={item.appearance.race}
                  height={item.appearance.height}
                  weight={item.appearance.weight}
                  eyeColor={item.appearance["eye-color"]}
                  hairColor={item.appearance["hair-color"]}
                  occupation={item.work.occupation}
                  base={item.work.base}
                  group={item.connections["group-affiliation"]}
                  relatives={item.connections.relatives}
                  alignment={item.biography.alignment}
                  fullName={item.biography["full-name"]}
                  alterEgos={item.biography["alter-egos"]}
                  aliases={item.biography.aliases}
                  placeOfBirth={item.biography["place-of-birth"]}
                  firstApp={item.biography["first-appearance"]}
                  publisher={item.biography.publisher}
                  


                />
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CharacterPage;
