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
      
        <Search getQuery={setQuery}  />
     
      
      <Container >
        <Row>
          {data.map((item) => {
            return (
              <div >
                <Character
                  name={item.name}
                  image={item.image.url}
                  gender={item.appearance.gender}
                  race={item.appearance.race}
                  alignment={item.biography.alignment}
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
