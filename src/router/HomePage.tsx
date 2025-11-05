import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portfolio } from "../reducers/data";
// import jsPDF from 'jspdf'; // Instalar: npm install jspdf @types/jspdf

const HomePage = () => {

    const handleDownloadPDF = () => {

        /* 📄 Método 2: Generar PDF dinámicamente (requiere: npm install jspdf)
        const doc = new jsPDF();
        
        // Información personal
        doc.setFontSize(20);
        doc.text(`${portfolio.personal_info.firstnames} ${portfolio.personal_info.lastnames}`, 20, 30);
        
        doc.setFontSize(14);
        doc.text(portfolio.roles.join(' + '), 20, 45);
        
        // Contacto
        doc.setFontSize(12);
        doc.text(`Email: ${portfolio.personal_info.email}`, 20, 60);
        doc.text(`Phone: ${portfolio.personal_info.phone}`, 20, 70);
        doc.text(`Location: ${portfolio.personal_info.location.city}, ${portfolio.personal_info.location.country}`, 20, 80);
        
        // About Me
        doc.setFontSize(16);
        doc.text('About Me', 20, 100);
        doc.setFontSize(11);
        const aboutLines = doc.splitTextToSize(portfolio.about_me, 170);
        doc.text(aboutLines, 20, 110);
        
        // Skills
        doc.setFontSize(16);
        doc.text('Skills', 20, 140);
        doc.setFontSize(11);
        const skillsText = portfolio.skills.join(', ');
        const skillLines = doc.splitTextToSize(skillsText, 170);
        doc.text(skillLines, 20, 150);
        
        // Descargar
        doc.save('Roosevelt_Remache_CV.pdf');
        */
    }

    return (
        <div className='container-sm'>
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
        </div>
    );
}

export default HomePage;
