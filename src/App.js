//import logo from './logo.svg';
import React from 'react';
import "./App.css";
import { ToastContainer, toast} from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import About from './components/About';
import Menus from './components/Menus';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
          <div>
            <Router>
            <ToastContainer />
            <Header />
                  <Container>
                    <Row md="auto">
                      <Col md={4}>
                          <Menus />
                      </Col>

                      <Col md={8}>
                        <Routes>
                        {" "}
                          <Route path="/" element={<Home />} />
                          <Route path="/add-course" element={<AddCourse />} />
                          <Route path="/about" element={<About />} />
                          {/* <Route path="/contact" element={<Contact />} />  */}
                          <Route path="/view-courses" element={<Allcourses />} />
                          <Route indexpath="/" element={<Home />}></Route>
                        </Routes>
                      </Col>
                    </Row>
                    <ToastContainer />
                  </Container>
            </Router>
            
          </div>

  );
}

export default App;
