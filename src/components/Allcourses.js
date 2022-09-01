import React, { useState , useEffect} from 'react';
import Course from './Course';
import base_url from '../api/Bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourses=()=> {
    useEffect(()=>{
        document.title = "View Courses || Course Application";
        //getAllCoursesFromServer();
    },[])

    //function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("Courses have been loaded", {toastId: "unique-random-text-xAu9C9-"});
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong",{toastId: "unique-random-text-xAu9C9-"});
            }
        )
    };

    //calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
      }, []);

      // deleting the course
    const updateCourses=(id)=> {
    setCourses(courses.filter((c) => c.id != id))
  }

    const[courses,setCourses]=useState([
        // {title:"Java Course",descprition:"This is demo course"},
        // {title:"C Course",descprition:"This is basics of C programming"},
        // {title:"Python Course",descprition:"This is python course"},
        // {title:"Java Course",descprition:"This is demo course"},
    ]);

    return(
        <div>
            <h1> All Courses </h1><br/>
            <p> List of Courses are as follows:</p>

            { courses.length>0 
                ? (courses.map((item)=> 
                    <Course key={item.id} update={updateCourses} course = {item} />
                ))
                : "No courses"
            }
            <small className="text-center mt-5">&copy; Kshama G. All rights reserved.</small>
        </div>
    );
};

export default Allcourses;
