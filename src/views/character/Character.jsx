import React from "react";
import {Card, Button} from "react-bootstrap";
import "./character.css";

const Character = ({addChar, showInfoModal, ...characterProps}) => {
    return (
        <div>
            <Card bg="dark" text="white" className="charGrid">
                <div className="imgContainer">
                    <Card.Img variant="top" src={characterProps.image?.url} className="cardImg"/>
                </div>

                <Card.Body>
                    <div className="textContainer">
                        <Card.Text className="cardText">
                            <h4>{characterProps.name}</h4>

                        </Card.Text>
                        <div className="buttonsContainer">
                            <Button className="button" onClick={() => showInfoModal(characterProps)}>More Info</Button>
                            <Button className="button" onClick={() => addChar(characterProps)}>Add Character</Button>
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Character;
