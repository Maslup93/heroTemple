import React from "react";
import {Table, Button, Container, Row, Col} from 'react-bootstrap';

import './charList.css'

const CharList = ({showInfoModal, selectedChars, removeChar}) => {

    const parsePowerValue = (powerValue, returnZero = false) => {
        const powerNumber = parseInt(powerValue, 10);
        if (isNaN(powerNumber)) return returnZero ? 0 : 'No info';
        return powerNumber;
    }

    const renderTeamStats = () => {
        const teamStats = selectedChars.reduce((acc, char) => {
            return {
                intelligence: acc.intelligence + parsePowerValue(char.powerstats.intelligence, true),
                strength: acc.strength + parsePowerValue(char.powerstats.strength, true),
                speed: acc.speed + parsePowerValue(char.powerstats.speed, true),
                durability: acc.durability + parsePowerValue(char.powerstats.durability, true),
                power: acc.power + parsePowerValue(char.powerstats.power, true),
                combat: acc.combat + parsePowerValue(char.powerstats.combat, true),
            }
        }, {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0,
        });

        return (
            <>
                <Row>
                    <Col>
                        <h4 style={{textAlign: 'center'}}>Team stats</h4>
                    </Col>
                </Row>
                <Row lg={3}>
                    {Object.keys(teamStats)
                        .sort((a, b) => teamStats[b] - teamStats[a])
                        .map((key, index) => (
                            <Col key={key}>
                                <h5 style={{
                                    textTransform: 'capitalize',
                                    width: 'fit-content',
                                    fontWeight: index === 0 ? 'bold' : 'unset',
                                    backgroundColor: index === 0 && 'yellow',
                                }}>
                                    {`Overall ${key}: ${teamStats[key]}`}
                                </h5>
                            </Col>
                        ))}
                </Row>
            </>
        )
    }

    return (
        <Container className="charListContainer">
            {!!selectedChars.length && renderTeamStats()}
            <Row>
                <Col className="listContainer">
                    <Table>
                        <thead>
                        <tr style={{textAlign: 'center'}}>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Intelligence</th>
                            <th>Strength</th>
                            <th>Speed</th>
                            <th>Durability</th>
                            <th>Power</th>
                            <th>Combat</th>
                            <th>Alignment</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!!selectedChars.length ? selectedChars.map((char) => (
                            <tr key={char.id} style={{textAlign: 'center'}}>
                                <td style={{verticalAlign: 'middle'}}>
                                    <img style={{width: 100, borderStyle: 'solid'}} src={char.image?.url}
                                         alt={char.name}/>
                                </td>
                                <td style={{verticalAlign: 'middle'}}>{char.name}</td>
                                <td style={{verticalAlign: 'middle'}}>{parsePowerValue(char.powerstats.intelligence)}</td>
                                <td style={{verticalAlign: 'middle'}}>{parsePowerValue(char.powerstats.strength)}</td>
                                <td style={{verticalAlign: 'middle'}}>{parsePowerValue(char.powerstats.speed)}</td>
                                <td style={{verticalAlign: 'middle'}}>{parsePowerValue(char.powerstats.durability)}</td>
                                <td style={{verticalAlign: 'middle'}}>{parsePowerValue(char.powerstats.power)}</td>
                                <td style={{verticalAlign: 'middle'}}>{parsePowerValue(char.powerstats.combat)}</td>
                                <td style={{
                                    verticalAlign: 'middle',
                                    textTransform: 'capitalize'
                                }}>{char.biography.alignment}</td>
                                <td style={{verticalAlign: 'middle'}}>
                                    <div style={{display: 'flex'}}>
                                        <Button className="button"
                                                onClick={() => showInfoModal(char)}>Details</Button>
                                        <Button className="button"
                                                onClick={() => removeChar(char.id)}>Remove</Button>
                                    </div>
                                </td>
                            </tr>
                        )) : <tr>
                            <td colSpan="10" style={{textAlign: 'center'}}>
                                <h5>No characters selected</h5>
                            </td>
                        </tr>}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default CharList;
