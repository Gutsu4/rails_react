import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <Link to="/">タスク一覧</Link>
            <Link to="/new">タスク作成</Link>
        </nav>
    )
}