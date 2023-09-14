import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Home from './Home'
import {mockEmployees} from './Home'
import ButtonClick from './ButtonClick'


function HomeUser() {
  // สร้างตัวแปรมาเก็บค่า member ที่เราไป get มา
  const [members, setMembers] = useState([]);
  

  // Get Data มาก่อน , ตัวแปรresponse เก็บค่ามา
  // started life cycle here
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData(); //เรียกใช้
  }, );
  

  return (
    <div className=''>
        <Navbar />
        <div className="card">
            <h2 className="title">Generation Thailand</h2>
            <h2 className="title">Home-User Sector</h2>
            <ButtonClick/>
        </div>
      <div className='content'>
        <table className='table'>
            <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Position</th>
            </tr>
            {/* {mockEmployees.map((item,index)=>(            
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                    </tr>
            ))} */}
            {members.map((member)=>(
              <tr>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            ))};
        </table>

      </div>
    </div>
  )
}

export default HomeUser