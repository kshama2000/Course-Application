import React,{useEffect} from 'react';
import { Card, CardBody } from 'reactstrap';
//import "./App.css";

function Header(){
    useEffect(()=>{
        document.title = "Course Application";
    },[])
    return(
        <div>
            <br/><br/>
            <Card className="bg-warning">
      <CardBody>
      <h1 className="text-center display-3 my-2">Welcome to Courses Application </h1>
      </CardBody>
    </Card>
        </div>
    );
}

export default Header;
