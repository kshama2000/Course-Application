import React, { useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';


const Home = () => {

  useEffect(() => {
    document.title = "Home || Course Application";
  }, []);

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
            <h1 className='ml-3'>Open new doors with graduate level learning!!!</h1>
            <br />
            <Link to="/view-courses">
                <Button className='bg-info' outline>Start Using</Button>
            </Link>
          </Container>
          </Col>
        </Row>
  <br/>
  <small className="text-center mt-5">&copy; Kshama G. All rights reserved.</small>
  </div>
    
  );
};

export default Home;