import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import pic from './photo.jpg'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={pic}
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Praveen Sharma</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Praveen Sharma. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Uttar Pradesh</p>
            <h5>Phone</h5>
            <p>(+91) 7310736712</p>
            <h5>Email</h5>
            <p>praying.sharma@gmail.com</p>
            <h5>Web</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="#"
            >
              My Programming Blog
            </a>
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="#"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
           
           

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2022}
              endYear={2024}
              schoolName={"INSTITUTE OF ENGINEERING & TECHNOLOGY KHANDARI CAMPUS,AGRA"}
              degreeName={"M.C.A"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={60} />
            
            <Skills skill={"Python"} progress={90} />
            <Skills skill={"Java"} progress={90} />


           
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Contact</h2>
            <h6>E-mail: praying.sharma@gmail.com</h6>
           




          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
