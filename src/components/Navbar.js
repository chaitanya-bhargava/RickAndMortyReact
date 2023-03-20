import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const onClickHandler = () => {
        const nav=document.querySelector('nav');
        const navlist= document.querySelector('nav ul');
        navlist.classList.toggle('hide');
        nav.classList.toggle('responsive');
    }
    return <nav className="responsive">
        <img className="nav-logo" src="logo.png" alt="logo"/>
        <ul className="hide">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/characters'}>Characters</NavLink></li>
            <li><NavLink to={'/locations'}>Locations</NavLink></li>
            <li><NavLink to={'/Episodes'}>Episodes</NavLink></li>
        </ul>
        <img onClick={onClickHandler} className="hamburger" src="hamburger.png" alt="menu"/>
    </nav>
}

export default Navbar;