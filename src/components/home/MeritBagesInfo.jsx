import React from "react";
import Avatar from "./Avatar";
import meritbadges from "../../data/meritbadges";
import { Container, Col, Row } from "react-bootstrap";

function MeritBadgesInfo() {
  return (
    <div className="meritBadgesInfoContainer">
      <h1>Alles over insignes</h1>
      <p>
        De insignes die scouts kunnen behalen, zijn verdeeld over drie fases: de
        basisfase, de verdiepingsfase en de specialisatiefase. De insignes zijn
        gebaseerd op de acht activiteitengebieden en de progressiematrix.
      </p>
      <div className="meritBadgesList">
        <Container>
          <Row>
            {meritbadges.map((meritBadge) => {
              return (
                <Col xl={2} sm={4} xs={6}>
                  <Avatar
                    key={meritBadge.id}
                    name={meritBadge.name}
                    imgURL={meritBadge.imgURL}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MeritBadgesInfo;
