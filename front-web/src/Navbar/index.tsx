import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link className="logo-text" to="/">DS Deliver</Link>
        </nav>
    )
}

export default Navbar;