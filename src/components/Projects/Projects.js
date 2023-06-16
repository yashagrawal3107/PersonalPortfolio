import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import healthcare from "../../Assets/Projects/healthcare.png";
import twitterClone from "../../Assets/Projects/twitterClone.png";
import crypto from "../../Assets/Projects/crypto.jpg";
import meme from "../../Assets/Projects/meme.jpg";
import railway from "../../Assets/Projects/railway.jpg";

import xampp from "../../Assets/Projects/xampp.png";

import kafka from "../../Assets/Projects/kafka-logo.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterClone}
              isBlog={false}
              title="Twitter Clone"
              description={`A twitter clone, having functionalites to post tweets, powered with firebase.`}
              technology = " ReactJs, CSS, Material UI, Firebase"
              link="https://twitter-clone-ad26a.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="'Watch Crypto' a web extension"
              description={`A google chrome web extension to watch live cryptocurrency details.`}
              technology = " ReactJs, CSS"
              link="https://github.com/yashagrawal3107/Watch__Cryptocurrency_chrome_extension"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthcare}
              isBlog={false}
              title="Blockchain based Smart Healthcare
System"
              description={`Developed a web application to store patients health
records on IPFS and to virtually consult with doctors.`}
              technology = " Solidity, ReactJs, CSS, Bootstrap, Version Control (Github)"
              link="https://github.com/yashagrawal3107/Blockchain-based-Smart-Healthcare-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Decentralized Meme Marketplace"
              description={`Developed an application based on blockchain to upload
Memes as a digital collectible.`}
technology = " ReactJs, CSS, Bootstrap, Solidity"
              link="https://github.com/yashagrawal3107/Meme-Marketplace"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Railway Reservation Management
System"
              description="System to book train tickets and maintain the train details.
It has two sides: User side (Passengers) &
Admin side."
              technology = " HTML, CSS, Php, SQL"
              link="https://github.com/yashagrawal3107/Railway-Management-System-Dbms"
            />
          </Col>

          
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={kafka}
              link=""
              title="Kafka Basics"
              site="https://www.linkedin.com/feed/update/urn:li:activity:6936882552368431104/"
            />
          </Col>
          {/* <Col md={4} className="blog-card">
            <BlogCard
              imgPath={xampp}
              link=""
              title="How to install XAMPP on Windows?"
              site="https://dev.to/yashagrawal3107/how-to-install-xampp-in-windows-1a24"
            />
          </Col> */}
         
          {/* <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
