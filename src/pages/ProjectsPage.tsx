import Header from "../components/Header";
import dataService from "../reducers/data";

const ProjectsPage = () => {
    const data = dataService.getAllData();
    return (
        <div className="container page">
            <div className="row">
                <div className="col-12 col-lg-6 order-1 order-lg-1">
                    <Header />
                </div>
                <div className="col-12 col-lg-6 py-5 py-lg-0 order-2 order-lg-2">
                    {
                        data.projects?.map((project, index) => (
                            <ProjectItem
                                key={index}
                                title={project.name}
                                description={project.description_long}
                                tecnologies={project.technologies}
                                link={project.link}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

interface ProjectItemProps {
    title: string;
    description: string;
    tecnologies: string[];
    link?: string;
}

const ProjectItem = ({ title, description, tecnologies, link }: ProjectItemProps) => {
    return (
        <div className="mb-5">
            <h3>{title}</h3>
            <p className="text">{description}</p>
            <div>
                {tecnologies.map((tech, index) => (
                    <span key={index} className="badge bg-secondary me-2">{tech}</span>
                ))}
            </div>
            {link && (
                <a className="btn btn-outline-light mt-3" href={link} target="_blank" rel="noopener noreferrer">
                    <small>
                        Visita el proyecto
                    </small>
                </a>
            )}
        </div>
    );
}

export default ProjectsPage;
