import { Link } from "react-router-dom";

function Menu() {
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">INICIO</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ours">Nosotros</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/recipes">Resetas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">CONTACTO</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;