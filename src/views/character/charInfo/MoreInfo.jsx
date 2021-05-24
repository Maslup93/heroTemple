import React from "react";
import { Modal, Button, Tabs, Tab, ProgressBar } from "react-bootstrap";
import "./moreInfo.css";


const MoreInfo = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="moreInfo">
          <div className="info">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Profile">
                <h4>Name: {props.charName}</h4>
                <h4>Race: {props.charRace}</h4>
                <h4>Alignment: {props.charAlignment}</h4>
              </Tab>
              <Tab eventKey="profile" title="Power Stats">
                <h4>
                  Intelligence:{" "}
                  <ProgressBar
                    animated
                    variant="danger"
                    now={props.charIntelligence}
                    label={props.charIntelligence}
                  />
                </h4>
                <h4>
                  Strength:{" "}
                  <ProgressBar
                    animated
                    variant="danger"
                    now={props.charStrength}
                    label={props.charStrength}
                  />
                </h4>
                <h4>
                  Speed:
                  <ProgressBar
                    animated
                    variant="danger"
                    now={props.charSpeed}
                    label={props.charSpeed}
                  />
                </h4>
                <h4>
                  Durability:{" "}
                  <ProgressBar
                    animated
                    variant="danger"
                    now={props.charDurability}
                    label={props.charDurability}
                  />
                </h4>
                <h4>
                  Power:
                  <ProgressBar
                    animated
                    variant="danger"
                    now={props.charPower}
                    label={props.charPower}
                  />
                </h4>
                <h4>
                  Combat:
                  <ProgressBar
                    animated
                    variant="danger"
                    now={props.charCombat}
                    label={props.charCombat}
                  />
                </h4>
              </Tab>
              <Tab eventKey="bio" title="Biography" >
                <h4>
                  Full Name: {props.charFullname}
                  </h4>
                  <h4>
                     Alter Egos: {props.charAlteregos}
                  </h4>
                 <h4>
                   Aliases: {props.charAliases}
                 </h4>
                  <h4>
                     Place Of Birth: {props.charPlaceofbirth}
                  </h4>
                 <h4>
                   First App: {props.charFirstappearance}
                 </h4>
                  <h4>
                    Publisher: {props.charPublisher}
                  </h4>
                  
                  
              </Tab>
              <Tab eventKey="appearance" title="Appearance">
              <h4></h4>
              <h4></h4>
              <h4></h4>
              <h4></h4>
              </Tab>
              <Tab eventKey="work" title="Work">
              <h4></h4>
              <h4></h4>
              <h4></h4>
              <h4></h4>
              </Tab>
              <Tab eventKey="connections" title="Connections">
              <h4></h4>
              <h4></h4>
              <h4></h4>
              <h4></h4>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className="moreInfo">
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MoreInfo;
