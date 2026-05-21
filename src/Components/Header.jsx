
import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
  return (
    <header className="header">

          <div className="logo">

            <span className="mc">MEDICARE CONNECT</span>

          </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">View Doctors</Link>
        <Link to="/book">Book Appointment</Link>
        {/* <Link to="/add-doctor">Add Doctor</Link> */}
        <Link to="/login" className="login-btn">Login</Link>
        
      </nav>
    </header>
  );
}