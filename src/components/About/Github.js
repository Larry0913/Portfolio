import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function CodingStats() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          GitHub <strong className="purple">Contributions</strong>
        </h1>
        <GitHubCalendar
          username="Larry0913"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>
      
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          LeetCode <strong className="purple">Submissions</strong>
        </h1>
        <Col md={12} style={{ textAlign: "center" }}>
          <img 
            src="https://leetcard.jacoblin.cool/lilingjie0913?theme=dark&font=Baloo%202&ext=heatmap&animation=false&border=0&radius=20&hide=ranking,submissions,problems-solved,total_submissions,streak,rating,contests,title,total_solved"
            alt="LeetCode Submissions"
            style={{ maxWidth: "900px", width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
}

export default CodingStats;
