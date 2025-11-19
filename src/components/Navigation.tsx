import { useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    return (
        <nav className="main-menu">
            <ul>
                <li className={"fs-3 mb-2" + (location.pathname === "/" ? " fw-bold ps-4" : "")}>
                    <a href="/portfolio/">
                        Info
                    </a>
                </li>
                <li className={"fs-3 mb-2" + (location.pathname === "/projects" ? " fw-bold ps-4" : "")}>
                    <a href="/portfolio/projects">
                        Proyectos
                    </a>
                </li>
                <li className={"fs-3 mb-2" + (location.pathname === "/contact" ? " fw-bold ps-4" : "")}>
                    <a href="/portfolio/contact">
                        Contacto
                    </a>
                </li>
                <li className="fs-3">
                    <a href="/portfolio/download">
                        Descargar
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;