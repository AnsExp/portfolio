import Footer from "../components/Footer";
import Header from "../components/Header";
import { DataService } from "../reducers/data";
import photo from '../img/photo-profile.jpg';
import Container from "../components/Container";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";

const AboutPage = () => {

    const portfolio = DataService.getInstance().getAllData();

    return (
        <div>
            <Header />
            <Container>
                <div className="row">
                    <div className="col-12 col-md-6 order-1 order-md-1">
                        <img className="w-100" src={photo} alt={portfolio.personal_info.firstnames} />
                    </div>
                    <div className="col-12 col-md-6 order-2 order-md-2">
                        <div className="p-3">
                            <h2 className="text">Hi, I'm <span className="text text-primary">{portfolio.personal_info.firstnames}</span></h2>
                            <hr />
                            <p className="text">{portfolio.about_me}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center mt-5 mb-3">Education</h3>
                    <Timeline>
                        {
                            portfolio.education.map((edu, index) => (
                                <TimelineItem key={index} title={edu.degree} date={edu.year} description={edu.institution} />
                            ))
                        }
                    </Timeline>
                </div>
                <div>
                    <h3 className="text-center mt-5 mb-3">Experience</h3>
                    <Timeline>
                        {
                            portfolio.experience.map((edu, index) => {
                                let descriptionElement = (
                                    <>
                                        <p className="text-muted my-0">
                                            {edu.company}
                                        </p>
                                        <ul>
                                            {edu.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="text text-muted">
                                                    <small>
                                                        {resp}
                                                    </small>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                );
                                return (
                                    <TimelineItem key={index} title={edu.position} date={edu.duration} description={descriptionElement} />
                                )
                            })
                        }
                    </Timeline>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default AboutPage;
