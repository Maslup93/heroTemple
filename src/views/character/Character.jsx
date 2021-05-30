import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import MoreInfo from "./charInfo/MoreInfo";
import "./character.css";

const Character = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div >
      <Card bg="dark" text="white" className="charGrid">
        <div className="imgContainer">
          <Card.Img variant="top" src={props.image?.url} className="cardImg" />
        </div>
        
        <Card.Body>
          <div className="textContainer">
            <Card.Text className="cardText">
              <h4>{props.name}</h4>
              
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
          {...props}
      />
    </div>
  );
};

export default Character;
