import React, { Fragment, useEffect, useState } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import base_url from '../api/Bootapi';
import axios from 'axios';

const AddCourse=()=> {
    useEffect(()=>{
        document.title = "Add Course || Course Application";
    },[]);
    
    const[course,setCourse]=useState({});

    //form handler function
    const handleForm=(e) =>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDataToServer=(data)=> {
        axios.post(`${base_url}/courses`,data).then(
          (response)=>{
            console.log(response);
            console.log("Success");
            toast.success("Course added successfully",{toastId: "unique-random-text-xAu9C9-"});
            setCourse({id:"", title:"",description:""});
          },
          (error) => {
            console.log(error);
            console.log("Error");
            toast.error("Something went wrong",{toastId: "unique-random-text-xAu9C9-"})
          }
        )
      }

    return(
        <Fragment> 
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <br/>
                    <label for ="userId">Course Id</label>
                    <Input 
                    type="text" 
                    placeholder='Enter here' 
                    name="userId" 
                    id="userId"
                    onChange={ (e) => {
                        setCourse({...course,id:e.target.value})
                    }
                }
                    />
                </FormGroup>

                <FormGroup>
                    <label for ="title">Course Title</label>
                    <Input 
                    type="text" 
                    placeholder='Enter Title here'  
                    id="title"
                    onChange={ (e) => {
                        setCourse({...course,title:e.target.value})
                    }
                }
                    />
                </FormGroup>

                <FormGroup>
                    <label for ="description">Course Description</label>
                    <Input 
                    type="textarea" 
                    placeholder='Enter Description here' 
                    id="description"
                    style={{height:150}}
                    onChange={ (e) => {
                        setCourse({...course,description:e.target.value})
                    }
                }
                    />
                </FormGroup>

                <Container className='text-center'>
                    <Button type="submit" color="success">Add course</Button>
                    <Button type="reset" color="warning ml-2" onClick={(e)=>{
            setCourse({});
          } }style={{marginLeft:"30px"}}>Clear</Button>
                </Container>
            </Form>
            <br /><br /><br /><br /><br /><br /><br />
            <small className="text-center mt-5">&copy; Kshama G. All rights reserved.</small>
        </Fragment>
        
    );
};

export default AddCourse;