import Navigation from './Navigation';

function Header() {
    return (
        <>
            <h1 className='page-title'>Roosevelt Stalin<br />Remache Abrigo</h1>
            <div className="py-5">
                <p className='fs-3 role-title'>Desarrollador Fullstack</p>
                <p className='fs-3 role-title'>Diseñador Gráfico</p>
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