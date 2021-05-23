import React from "react";
import { Card, Button } from "react-bootstrap";
import './character.css'

const Character = ({name,image,gender,race,alignment}) => {
  return (
    <div >
      <Card >
        <Card.Img variant="top" src={image}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Gender: {gender}
            <br/>
            Race: {race}
            <br/>
            Alignment: {alignment}
          </Card.Text>
          <Button variant="primary">More Info</Button>
          <Button variant="primary">Add Character</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Character;
