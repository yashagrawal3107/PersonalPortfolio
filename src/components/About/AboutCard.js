import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Yash Agrawal </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br />I am a Software Engineer at <span className="purple"> Shiprocket, India. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Graphic Designing
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Stocks and Crypto Trading
            </li>
            {/* <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Reading Novels
            </li> */}
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Web Series & Movies
            </li>
          </ul>
          <br/>
          {/* <p style={{ textAlign: "justify" }}><span className="purple">Fun Fact:</span> Tea is a key to make me do anything😀.</p> */}

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
