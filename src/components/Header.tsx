import { useLocation } from 'react-router-dom';
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
                            <a className={'text' + (location.pathname === '/' ? ' active' : '')} href="/">Home</a>
                        </li>
                        <li className="page-collection">
                            <a className={'text' + (location.pathname === '/about' ? ' active' : '')} href="/about">About</a>
                        </li>
                        <li className="page-collection">
                            <a className={'text' + (location.pathname === '/projects' ? ' active' : '')} href="/projects">Projects</a>
                        </li>
                        <li className="page-collection">
                            <a className={'text' + (location.pathname === '/work-with-me' ? ' active' : '')} href="/work-with-me">Work With Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;