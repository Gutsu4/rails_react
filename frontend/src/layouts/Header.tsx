import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <Link to="/" className="navbar-brand"></Link>
            <Link to="/new" className="navbar-brand"></Link>
        </nav>
    )
}