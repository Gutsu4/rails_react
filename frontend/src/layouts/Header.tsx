import {NavLink} from "react-router-dom";
import "./../css/Header.css";

export default function Header() {
    return (
        <nav className="navbar">
            <div className="logo">タスク管理</div>
            <div className="nav-links">
                <NavLink to="/" className="nav-link">
                    一覧
                </NavLink>
                <NavLink to="/new" className="nav-link">
                    作成
                </NavLink>
            </div>
        </nav>
    );
}