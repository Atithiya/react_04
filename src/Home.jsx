import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import ButtonClick from "./ButtonClick"

export const  mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {


  return (
    <>
      <Navbar/>
      <div className="card">
        <h2 className="title" >Generation Thailand</h2>
        <h2 className="title">React-Accessment</h2>
        <ButtonClick/>
      </div>
    </>
  )
}



export default Home
