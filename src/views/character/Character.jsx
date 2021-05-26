import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import MoreInfo from "./charInfo/MoreInfo";
import "./character.css";

const Character = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="cardContainer">
      <Card bg="dark" text="white" className="charGrid">
        <div className="imgContainer">
          <Card.Img variant="top" src={props.image} className="cardImg" />
        </div>
        
        <Card.Body>
          <div className="textContainer">
            <Card.Text className="cardText">
              <h4>{props.name}</h4>
              Gender: {props.gender}
              <br />
              Race: {props.race}
              <br />
              Alignment: {props.alignment}
            </Card.Text>
            <div className="buttonsContainer">
            <Button className="button" onClick={() => setModalShow(true)}>More Info</Button>
            <Button className="button">Add Character</Button>
            </div>
            
          </div>
        </Card.Body>
      </Card>
      <MoreInfo
        show={modalShow}
        onHide={() => setModalShow(false)}
        charPhoto={props.image}
        charName={props.name}
        charAlignment={props.alignment}
        charRace={props.race}
        charIntelligence={props.intelligence}
        charPower={props.power}
        charCombat={props.combat}
        charSpeed={props.speed}
        charDurability={props.durability}
        charStrength={props.strength}
        charHeight={props.height}
        charWeight={props.weight}
        charEyeColor={props.color}
        charHairColor={props.haircolor}
        charOccupation={props.occupation}
        charBase={props.base}
        charGroup={props.groupaffiliation}
        charRelatives={props.relatives}
        charFullName={props.fullname}
        charAlterEgos={props.alteregos}
        charAliases={props.aliases}
        charPlaceOfBirth={props.p}
        charFirstApp={props.firstappearance}
        charPublisher={props.publisher}
      />
    </div>
  );
};

export default Character;
