import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import biggreenegg from "../../Assets/Projects/S-biggreenegg.png";
import fashiony from "../../Assets/Projects/S-fashiony.png";
import mckickz from "../../Assets/Projects/S-mckickz.png";
import munken from "../../Assets/Projects/S-munken.png";
import spaincheck from "../../Assets/Projects/spaincheck.png";
import sharpedgeshop from "../../Assets/Projects/sharpedgeshop.png";
import vitalprotein from "../../Assets/Projects/vital.png";
import silvermirror from "../../Assets/Projects/silvermirror.png";

function Projects() {
  const projectsData = [
    {
      imgPath: vitalprotein,
      title: "Vital Protein",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      demoLink: "https://www.vitalproteins.com/"
    },
    {
      imgPath: silvermirror,
      title: "Silver Mirror",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      demoLink: "https://shop.silvermirror.com/"
    },
    {
      imgPath: biggreenegg,
      title: "Big Green Egg",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      // ghLink: "https://github.com/devbit-space/Chatify",
      demoLink: "https://biggreenegg.com.au/"
    },
    {
      imgPath: fashiony,
      title: "Fashiony",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      demoLink: "https://fashiony.in/"
    },
    {
      imgPath: mckickz,
      title: "McKickz",
      description: "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
      demoLink: "https://mckickz.co.uk/"
    },
    {
      imgPath: munken,
      title: "Munken",
      description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      demoLink: "https://munken.co/"
    },
    {
      imgPath: sharpedgeshop,
      title: "Sharpedge Shop",
      description: "An e-commerce website for the Big Green Egg grill and accessories. Built with React, Redux, and Firebase, featuring a responsive design, product catalog, shopping cart, and secure payment processing.",
      demoLink: "https://sharpedgeshop.com/pages/knife-configurator"
    },
    {
      imgPath: spaincheck,
      title: "Pet Furry",
      description: "Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
      demoLink: "https://spaincheck.com/"
    }
  ];

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
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                // ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
