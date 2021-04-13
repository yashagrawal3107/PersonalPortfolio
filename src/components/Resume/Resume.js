import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Resume_Yash_Agrawal.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            {/* <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR ML ENGINEER [Omdena]"
              date="June 2020 - August 2020"
              content={[
                "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            /> */}
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Graphic Designer [Kreiva-2019 Cultural Fest of IIIT Vadodara]"
              content={[
                "Worked on designing the posters and flex for the fest using Adobe Illustrator",
              ]}
            />
            <Resumecontent
              title="Graphic Designer [Cerebro-2020 Technical Fest of IIIT Vadodara]"
              content={[
                "Worked on designing the posters and flex for the fest using Adobe Illustrator",
              ]}
            />
            <Resumecontent
              title="Participant in Dramatics Event "
              content={[
                "Secured 2nd position in Inter College team dramatics event during Synapse 2019.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech in Computer Science & Engineering [IIIT Vadodara] "
              date="2018 - Present"
              content={[`CGPA: 7.13 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Macro Vision Academy, Burhanpur]"
              date="2016 - 2018"
              content={["Precentage: 87.2%"]}
            />
            <Resumecontent
              title="10TH BOARD [Burhanpur Public School, Burhanpur] "
              date="2015 - 2016"
              content={["CGPA: 10/10"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
