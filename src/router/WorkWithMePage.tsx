import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { DataService } from "../reducers/data";

const WorkWithMePage = () => {

    const portfolio = DataService.getInstance().getAllData();

    return (
        <div className='container-sm'>
            <Header />
            <Container>
                <h3 className="text-center">We Talk?</h3>
                <p className="text">
                    If you're looking for someone who blends logic, aesthetics, and functionality in every line of code and every design stroke… you’ve found the right person.
                </p>
                <p className="text">
                    I'm a frontend developer, backend developer, and graphic designer. That means I can build your site from the ground up, bring it to life with a sleek interface, and make sure it runs like clockwork. Whether you need a fast, responsive website, a solid system architecture, or a visual identity that resonates with your audience—I'm here to help.
                </p>
                <p className="text text-secondary m-0">
                    <i className="bi bi-envelope"></i>
                    <span className="ms-2">
                        {portfolio.personal_info.email}
                    </span>
                </p>
                <p className="text text-secondary m-0">
                    <i className="bi bi-phone"></i>
                    <span className="ms-2">
                        {portfolio.personal_info.phone}
                    </span>
                </p>
            </Container>
            <Footer />
        </div>
    );
}

export default WorkWithMePage;
