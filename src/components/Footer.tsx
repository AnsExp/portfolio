import { DataService } from '../reducers/data';

function Footer() {

    const portfolio = DataService.getInstance().getAllData();

    return (
        <footer className='text-center p-4 mt-5'>
            <h5>Where I'm?</h5>
            <div className="header-nav my-2" role="navigation">
                <nav className="main-nav" data-content-field="navigation">
                    <ul className='justify-content-center'>
                        {
                            portfolio.personal_info.social_links.map((link, index) => (
                                <li key={index} className="page-collection">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <hr />
            <div className="mb-3">
                <span className='text-secondary'>© {new Date().getFullYear()} {portfolio.personal_info.firstnames} {portfolio.personal_info.lastnames}. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;