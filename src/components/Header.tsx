import dataService from '../reducers/data';
import Navigation from './Navigation';

function Header() {
    const data = dataService.getAllData();
    return (
        <>
            <h1 className='page-title'>{data.personal_info.firstnames}<br />{data.personal_info.lastnames}</h1>
            <div className="py-5">
                {
                    data.roles.map((role, index) => (
                        <p key={index} className='fs-3 role-title'>{role}</p>
                    ))
                }
            </div>
            <Navigation />
            <div className="py-5">
                <a href="https://github.com/AnsExp" className="fs-3 text-light me-4">
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/roosevelt-remache-abrigo-5888b9293/" className="fs-3 text-light">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
        </>
    );
}

export default Header;