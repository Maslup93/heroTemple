import React from "react";
import { Card, Button } from "react-bootstrap";
import './character.css'

const Character = ({name,image,gender,race,alignment}) => {
  return (
    <div >
      <Card bg="dark" text="white" className="charGrid">
        <Card.Img variant="top" src={image} className="img"/>
        <Card.Body>
          <Card.Title className="text">{name}</Card.Title>
          <Card.Text className="text">
            Gender: {gender}
            <br/>
            Race: {race}
            <br/>
            Alignment: {alignment}
          </Card.Text>
          <div className="button">
          <Button >More Info</Button>
          <Button >Add Character</Button>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Character;
