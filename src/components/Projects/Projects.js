import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloudmetric from "../../Assets/Projects/cloudmetric.png";
import realestate from "../../Assets/Projects/realestate.png";
import marketbay from "../../Assets/Projects/marketbay.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import gatekeeper from "../../Assets/Projects/gatekeeper.jpg";
import music from "../../Assets/Projects/music.jpeg";
import hrms from "../../Assets/Projects/EIMS.png";
import uper from "../../Assets/Projects/asn1decodetool.png";

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
              imgPath={cloudmetric}
              isBlog={false}
              title="ML Model Deployment Con vs. Ser Comparison"
              subtitle="(2025 Jan - 2025 April)"
              description="• Implemented and deployed a ResNet-18 model for CIFAR-100 image classification, achieving ~87% accuracy.
• Developed containerized solution using Docker and FastAPI on Google Cloud Run for scalable model serving.
• Created serverless implementation leveraging Flask on Google Cloud Functions as an alternative deployment strategy.
• Conducted comparative analysis of both approaches, evaluating performance, cost, and scalability metrics."
              techStack={[
                "Python",
                "Containerization",
                "Serverless",
                "PyTorch",
                "Docker",
                "FastAPI",
                "Flask",
                "Google Cloud Run",
                "Google Cloud Functions",
                "ResNet-18",
                "CIFAR-100"
              ]}
              ghLink="https://github.com/Ericzhouhy/CMPT_756_Final_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Real Estate Investment Insights"
              subtitle="(2025 Jan - 2025 April)"
              description="• Designed and implemented a Tableau-based interactive investment dashboard for Greater Vancouver real estate trends.
• Developed automated web crawlers to collect House Price Index data and current property listings from multiple sources.
• Applied Random Forest and XGBoost models for benchmark price prediction and trend forecasting.
• Integrated time-aware hyperparameter tuning to enhance model accuracy and reliability."
              techStack={[
                "Python",
                "Tableau",
                "Web Scraping",
                "Random Forest",
                "XGBoost",
                "Time Series",
                "Data Visualization",
                "Machine Learning"
              ]}
              ghLink="https://github.com/Ericzhouhy/CMPT_733_Final_Project"
              demoLink="https://public.tableau.com/app/profile/xia.meng/viz/CMPT733VancouverRealEstate/ALL_1"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketbay}
              isBlog={false}
              title="MarketBay"
              subtitle="(2024 Sept - 2024 Dec)"
              description="• Built a full-stack e-commerce platform with React.js frontend and Express.js/Node.js backend during HackHub bootcamp.
• Implemented secure user authentication and dynamic product listings with intuitive buyer-seller interaction flows.
• Designed MongoDB data models for efficient CRUD operations across users, products, and transactions.
• Integrated real-time chat using Socket.io and deployed on AWS (S3 for frontend, EC2 for backend) with CI/CD."
              techStack={[
                "Full-Stack",
                "JavaScript",
                "HTML",
                "CSS",
                "React.js",
                "Express.js",
                "Node.js",
                "MongoDB",
                "Socket.io",
                "AWS S3",
                "AWS EC2",
                "CI/CD"
              ]}
              ghLink="https://github.com/erik-hu24/MarketPlace-frontEnd"
              demoLink="http://3.93.45.172/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Amazon and Temu Data Analysis"
              subtitle="(2024 Sept - 2024 Dec)"
              description="• Implemented distributed data processing with Apache Spark and HDFS for large-scale data analysis.
• Preprocessed text-heavy datasets using tokenization and n-gram extraction for NLP tasks.
• Fine-tuned Random Forest model achieving 0.7711 accuracy for customer review rating prediction.
• Developed facebook/bart-base model reaching 0.8421 accuracy for product categorization."
              techStack={[
                "Python",
                "Apache Spark",
                "HDFS",
                "NLP",
                "Machine Learning",
                "Random Forest",
                "BART",
                "Big Data",
                "Data Analysis"
              ]}
              ghLink="https://github.com/Ericzhouhy/E-commerce_analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Song Popularity Prediction And Analysis"
              subtitle="(2024 May - 2024 Aug)"
              description="• Analyzed key audio features influencing song popularity using Spotify data and developed predictive models.
• Implemented temporal feature analysis, advanced resampling techniques, and hyperparameter tuning.
• Addressed technical challenges including data variability, feature dependency on Spotify API, and class imbalance.
• Developed recommendations for model improvement through data cleaning and feature engineering."
              techStack={[
                "Python",
                "Data Analysis",
                "Machine Learning",
                "Feature Engineering",
                "Spotify API",
                "Time Series",
                "Data Cleaning",
                "Statistical Analysis",
                "Hyperparameter Tuning"
              ]}
              ghLink="https://github.com/Larry0913/Song-Popularity-Prediction-Project_CMPT353"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gatekeeper}
              isBlog={false}
              title="Gatekeeper Insights Project"
              subtitle="(2024 Jan - 2024 April)"
              description="• Developed an embedded customer traffic monitoring system for real-time store occupancy tracking.
• Integrated BeagleBone Green with Arduino for comprehensive sensor management including motion and temperature sensors.
• Implemented UDP-based real-time data transmission to a Node.js web dashboard.
• Created joystick-controlled mode switching system for multiple display options and configurations."
              techStack={[
                "C Programming",
                "Embedded Systems",
                "BeagleBone Green",
                "Arduino",
                "UDP",
                "Node.js",
                "Sensor",
                "I2C GPIO PWM",
                "IoT Protocols"
              ]}
              ghLink="https://github.com/Larry0913/GatekeeperInsights_CMPT433/tree/main"
              demoLink="https://github.com/Larry0913/GatekeeperInsights_CMPT433/blob/main/gatekeepervideo.mp4" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrms}
              isBlog={false}
              title="Enterprise Information Management Platform"
              subtitle="(2023 Aug - 2023 Dec)"
              description="• Developed a secure enterprise information management platform using Spring Boot and Spring Security with role-based access control.
• Built responsive web interfaces with Thymeleaf templates and RESTful backend services for HR workflows.
• Integrated PostgreSQL with Spring Data JPA for efficient data persistence and transaction management.
• Implemented secure file uploads and employee profile features with Docker deployment support."
              techStack={[
                "Java",
                "Web Development",
                "Spring Boot",
                "Spring Security",
                "PostgreSQL",
                "Thymeleaf",
                "Docker",
                "REST API",
                "JPA",
                "MVC",
                "HTML",
                "CSS",
              ]}
              ghLink="https://github.com/Larry0913/Enterprise_Information_Management_System_CMPT276"
              demoLink="https://cmpt276-springboot-render.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uper}
              isBlog={false}
              title="ASN.1 Code Stream Parser"
              subtitle="(2023 May - 2023 Aug)"
              description="• Developed a C-based parser to decode ASN.1 encoded data streams into human-readable JSON format.
• Implemented parsing logic for Day1 message sets with support for complex ASN.1 data types.
• Built efficient memory management system for handling large encoded data streams.
• Created structured JSON output format for easy integration with other analysis tools."
              techStack={[
                "C",
                "V2X",
                "ASN.1",
                "JSON",
                "Protocol Analysis",
                "Binary Processing",
                "Embedded Systems",
                "Unaligned Packed Encoding Rules",
                "Abstract Syntax Notation One",
                "Smart Transport Protocol",
                "Vehicle-to-Vehicle Communication",
                "Vehicle-to-Infrastructure Communication",
              ]}
              ghLink="https://github.com/Larry0913/asn1c-msg-decode-tool"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
