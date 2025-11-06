import Footer from "../components/Footer";
import Header from "../components/Header";
import { DataService } from "../reducers/data";
import photo from '../../public/img/photo-profile.jpg';
import Container from "../components/Container";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { useState } from "react";

const AboutPage = () => {

    const portfolio = DataService.getInstance().getAllData();
    const [openEducation, setOpenEducation] = useState<string[]>([]);
    const [openExperience, setOpenExperience] = useState<string[]>([]);

    const toggleEducationHandle = (id: string) => {
        if (openEducation.includes(id)) {
            setOpenEducation(openEducation.filter(item => item !== id));
        } else {
            setOpenEducation([...openEducation, id]);
        }
    };

    const toggleExperienceHandle = (id: string) => {
        if (openExperience.includes(id)) {
            setOpenExperience(openExperience.filter(item => item !== id));
        } else {
            setOpenExperience([...openExperience, id]);
        }
    };

    return (
        <div>
            <Header />
            <Container>
                <div className="row">
                    <div className="col">
                        <img className="w-100" src={photo} alt={portfolio.personal_info.firstnames} />
                    </div>
                    <div className="col">
                        <div className="p-3">
                            <h2 className="text">Hi, I'm <span className="text text-primary">{portfolio.personal_info.firstnames}</span></h2>
                            <hr />
                            <p className="text">{portfolio.about_me}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center mt-5 mb-3">Education</h3>
                    <Accordion open={openEducation} toggle={toggleEducationHandle}>
                        {portfolio.education.map((edu, index) => (
                            <AccordionItem key={index}>
                                <AccordionHeader targetId={index.toString()}>{edu.degree}</AccordionHeader>
                                <AccordionBody accordionId={index.toString()}>
                                    <p className="text card-subtitle text-muted">{edu.institution}</p>
                                    <small className="text card-subtitle mb-2 text-muted">{<i className="bi bi-calendar"></i>} — {edu.year}</small>
                                </AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div>
                    <h3 className="text-center mt-5 mb-3">Experience</h3>
                    <Accordion open={openExperience} toggle={toggleExperienceHandle}>
                        {portfolio.experience.map((exp, index) => (
                            <AccordionItem key={index}>
                                <AccordionHeader targetId={index.toString()}>{exp.position}</AccordionHeader>
                                <AccordionBody accordionId={index.toString()}>
                                    <p className="text card-subtitle text-muted">{exp.company}</p>
                                    <small className="text card-subtitle mb-2 text-muted">{<i className="bi bi-calendar"></i>} — {exp.duration}</small>
                                    <p>Responsibilities:</p>
                                    <ul className="list-unstyled">
                                        {exp.responsibilities.map((resp, index) => (
                                            <li key={index} className="text text-muted"><i className="bi bi-check-circle"></i> {resp}</li>
                                        ))}
                                    </ul>
                                </AccordionBody>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default AboutPage;
