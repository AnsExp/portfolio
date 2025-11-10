import { useLocation, Link } from 'react-router-dom';
import { DataService } from '../reducers/data';

function Header() {

    const portfolio = DataService.getInstance().getAllData();
    const location = useLocation();

    return (
        <header className='text-center p-5'>
            <div className="my-5">
                <h2 className='title-name'>{portfolio.personal_info.firstnames.toUpperCase()}</h2>
                <h2 className='title-name'>{portfolio.personal_info.lastnames.toUpperCase()}</h2>
            </div>
            <div className="mb-4">
                {
                    portfolio.roles.map((role, index) => (
                        <span key={index} className='title-role'>
                            {
                                index > 0 && <span className='text-primary'>+</span>
                            }
                            <span key={index} className='text-secondary mx-3'>{role}</span>
                        </span>
                    ))
                }
            </div>
            <div className="header-nav" role="navigation">
                <nav className="main-nav" data-content-field="navigation">
                    <ul className='justify-content-center'>
                        <li className="page-collection">
                            <Link className={'text' + (location.pathname === '/' ? ' active' : '')} to="/">Inicio</Link>
                        </li>
                        <li className="page-collection">
                            <Link className={'text' + (location.pathname === '/about' ? ' active' : '')} to="/about">Acerca de</Link>
                        </li>
                        <li className="page-collection">
                            <Link className={'text' + (location.pathname === '/projects' ? ' active' : '')} to="/projects">Proyectos</Link>
                        </li>
                        <li className="page-collection">
                            <Link className={'text' + (location.pathname === '/work-with-me' ? ' active' : '')} to="/work-with-me">Trabaja Conmigo</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;