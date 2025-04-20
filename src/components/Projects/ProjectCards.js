import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsPlayCircle } from "react-icons/bs";

function ProjectCards(props) {
  const formattedDescription = props.description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.subtitle && (
          <div style={{ 
            color: "#b8b8b8",
            fontSize: "0.9rem",
            marginTop: "-8px",
            marginBottom: "12px"
          }}>
            {props.subtitle}
          </div>
        )}
        <Card.Text style={{ textAlign: "left", whiteSpace: "pre-line" }}>
          {formattedDescription}
        </Card.Text>
        {props.techStack && (
          <div className="tech-stack-tags" style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "8px",
            marginBottom: "15px" 
          }}>
            {props.techStack.map((tech, index) => (
              <span
                key={index}
                style={{
                  background: "rgba(200, 137, 230, 0.25)",
                  color: "#c084f5",
                  padding: "4px 10px",
                  borderRadius: "15px",
                  fontSize: "0.8rem",
                  border: "1px solid rgba(200, 137, 230, 0.5)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
