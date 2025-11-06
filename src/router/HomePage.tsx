import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portfolio } from "../reducers/data";
// import jsPDF from 'jspdf'; // Instalar: npm install jspdf @types/jspdf

const HomePage = () => {

    const handleDownloadPDF = () => {
        console.log(Math.floor(Math.random() * 100) + 1);
    }

    return (
        <>
            <Header />
            <Container>
                <h2 className="text-center">Welcome to My Portfolio</h2>
                <p className="text-center text">Explore my projects, skills, and experience.</p>
                <hr />
                <h3 className="text-center">Skills</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {
                        portfolio.skills.map((skill, index) => (
                            <div key={index} className="text card px-3 py-1 m-2">{skill}</div>
                        ))
                    }
                </div>
                <hr />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={handleDownloadPDF}>Download PDF</button>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default HomePage;
