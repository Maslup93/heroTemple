import React from "react";
import { Modal, Button, Tabs, Tab, ProgressBar } from "react-bootstrap";
import "./moreInfo.css";

const powerStatsConfig = [
  {
    label: 'Intelligence',
    dataKey: 'intelligence',
  },
  {
    label: 'Strength',
    dataKey: 'strength',
  },
  {
    label: 'Speed',
    dataKey: 'speed',
  },
  {
    label: 'Durability',
    dataKey: 'durability',
  },
  {
    label: 'Power',
    dataKey: 'power',
  },
  {
    label: 'Combat',
    dataKey: 'combat',
  },
]

const MoreInfo = ({ onHide, show, ...characterProps}) => {
  return (
    <div className="modalContainer">
      <Modal
        onHide={onHide}
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div></div>
        <Modal.Body className="moreInfo">
          <div className="info">
            <Tabs defaultActiveKey="powerStats" id="uncontrolled-tab-example">
              <Tab eventKey="powerStats" title="Power Stats" className="tabs">
                {powerStatsConfig.map(section => (
                    <h4 key={section.dataKey}>
                      {section.label}:{" "}
                      <ProgressBar
                          animated
                          variant="danger"
                          now={characterProps.powerstats[section.dataKey]}
                          label={characterProps.powerstats[section.dataKey]}
                      />
                    </h4>
                ))}
              </Tab>
              <Tab eventKey="bio" title="Biography" className="tabs">
                <h4>Full Name: {characterProps.biography['full-name']}</h4>
                <h4>Alter Egos: {characterProps.biography['alter-egos']}</h4>
                {/*<h4>Aliases: {characterProps}</h4>*/}
                <h4>Place Of Birth: {characterProps.biography['place-of-birth']}</h4>
                <h4>First App: {characterProps.biography['first-appearance']}</h4>
                <h4>Publisher: {characterProps.biography.publisher}</h4>
              </Tab>
              <Tab eventKey="appearance" title="Appearance" className="tabs">
                <h4></h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
              </Tab>
              <Tab eventKey="work" title="Work" className="tabs">
                <h4></h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
              </Tab>
              <Tab eventKey="connections" title="Connections" className="tabs">
                <h4></h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
              </Tab>
            </Tabs>
            <Modal.Footer>
              <div className="infoButtonContainer">
                <Button className="button" onClick={onHide}>
                  Close
                </Button>
              </div>
            </Modal.Footer>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MoreInfo;
