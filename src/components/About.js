import React , { useEffect } from "react";
import { Container, Row, Col} from "reactstrap";

const About = () => {

    useEffect(()=> {
      document.title="About || Course Application";
    },[]);
  
    return (
      <div>
        <Row md="auto">
          <Col>
              <Container className="my-2">
                  <img src="/images/online759.jpeg" />
              </Container>
          </Col>
          <Col>
          <br/>
          <Container className='text-center bg-light'>
            <h1 className='ml-3'>About</h1>
            <p className="text-align-center">
                I am Kshama G, a Computer Science Engineer.
                This application is developed to give more information about the courses available for Computer Science Engineering.
                This project is developed using React (Front-End) and SpringBoot (Backend).{" "}
              </p>
          </Container>
          </Col>
        </Row>
        <small className="text-center mt-5">&copy; Kshama G. All rights reserved.</small>
    </div>
    );
  };
  
  export default About;