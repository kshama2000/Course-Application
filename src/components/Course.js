import React from "react";
import{
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container ,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/Bootapi";
import { toast } from "react-toastify";

function Course({course, update}) {

  const deleteCourse=(id)=> {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course deleted successfully", {toastId: "unique-random-text-xAu9C9-"});
        update(id);
      },
      (error)=> {
        toast.error("Course Not Deleted, something went wrong", {toastId: "unique-random-text-xAu9C9-"});
      }
    )
  }

    return (
        <Card className="text-center my-3" >
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
          <Button color="danger" onClick={()=> {
            deleteCourse(course.id);
          }}>Delete</Button>
          <Button color="warning" style={{marginLeft:"30px"}}>Update</Button>
        </Container>
      </CardBody>
    </Card>
    );
}

export default Course;