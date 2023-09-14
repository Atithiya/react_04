import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Home from './Home'
import {mockEmployees} from './Home'
import ButtonClick from './ButtonClick'
import axios from 'axios'
import { useState,useEffect } from 'react'

function HomeAdmin() {

    // สร้างตัวแปรมาเก็บค่า member ที่เราไป get มา
    const [members, setMembers] = useState([]);
    const [name,setName]= useState([]);
    const [lastname,setLastname] = useState([]);
    const [position,setPosition] = useState([]);

    // Get Data มาก่อน , ตัวแปรresponse เก็บค่ามา
    // started life cycle here
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get("https://jsd5-mock-backend.onrender.com/members"
        );
        setMembers(response.data);
      };
      getData(); //เรียกใช้
    }, []);

    // create here
  // async(รับค่าเข้ามาด้วย)
  const createData = async(name,lastname,position) => {
    const requestData = { 

      name : name,
      lastname : lastname,
      position : position
    }
    const response = await axios.post("https://jsd5-mock-backend.onrender.com/members",
    requestData
    );
    // ใส่ auto reload เพื่อที่จะไม่ต้อง refresh
    if (response.status===200){
      setReload(!reload)
    }

    console.log(response);
  };
  
  // Delete here
  const Del = async(id) => {
    const requestData = { 
      id : id,
      name : name,
      lastname : lastname,
      position : position
    }
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`,
    requestData
    );
  
    if (response.status===200){
      setReload(!reload)
    }

    console.log(response);
  };

  return (
    <>
      <Navbar/>
      <div className="card">
        <h2 className="title">Generation Thailand</h2>
        <h2 className="title">Home-Admin Sector</h2>          
        <ButtonClick/>
      </div>
      <div  className='admin-content' >
        <div className=''>
            <h3>Create User Here</h3>
            <input type="text" placeholder='Name' value={name} onChange={(ev) => setName(ev.target.value)}/>

            <input type="text" placeholder='Lastname'  value={lastname} onChange={(ev) => setLastname(ev.target.value)}/>

            <input type="text" placeholder='Position' value={position} onChange={(ev) => setPosition(ev.target.value)}/>
            <button onClick={()=>createData(name,lastname,position)} className='content-button'>Save</button>
        </div>
        <div className='table-box'>
            <table className='table'>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {/* {mockEmployees.map((item,index)=>(            
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td><button >Delete</button></td>
                    </tr>
            ))} */}
            {members.map((member)=>(
              <tr>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
                <td><button onClick={() => Del(member.id)} className='content-button'>Delete</button></td>
              </tr>
            ))};
            </table>
        </div>
      </div>
    </>
  )
}

export default HomeAdmin