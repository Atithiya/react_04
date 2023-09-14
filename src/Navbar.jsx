import { Link } from "react-router-dom"; //Link ใช้ได้เฉพาะ React Router Dom มันจะไม่refreshหน้าใหม่


const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-ul">
                {/* <a href="/" className="navbar-nav">Home</a>
                <a href="/Owner" className="navbar-nav">Owner</a> */}
                <Link to={'/'} className="navbar-nav" style={{color:"white"}}>Home </Link>
                <Link to={'/Owner'} className="navbar-nav" style={{color:"white"}}>Owner</Link>
            </ul>
        </div>
    )
}

export default Navbar