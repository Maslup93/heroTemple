import React, { useState, useEffect } from "react";
import Search from "../../layout/Search";
import useGet from "../../utils/useGet";
import Character from "./Character";
import { Container, Row, Col } from "react-bootstrap";
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
                  eyeColor={item.appearance.eyecolor}
                  hairColor={item.appearance.haircolor}
                  occupation={item.work.occupation}
                  base={item.work.base}
                  group={item.connections.groupaffiliation}
                  relatives={item.connections.relatives}
                  alignment={item.biography.alignment}
                  fullName={item.biography.full}
                  alterEgos={item.biography.alteregos}
                  aliases={item.biography.aliases}
                  placeOfBirth={item.biography.placeofbirth}
                  firstApp={item.biography.firstappearance}
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
