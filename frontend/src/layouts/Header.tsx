import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <Link to="/"></Link>
            <Link to="/new"></Link>
        </nav>
    )
}