import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
import dataService, { type PortfolioDataProject } from "../reducers/data";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";

const ProjectsPage = () => {
    const projects = dataService.getAllData().projects;
    const [currentProject, setCurrentProject] = useState<PortfolioDataProject | null>(null);
    const buttonHandleClick = (project: PortfolioDataProject) => {
        setCurrentProject(project);
        console.log(project);
    }
    return (
        <>
            <Header />
            <Container>
                <h2 className="text-center">Mis Proyectos</h2>
                <p className="text-center text">Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
                {
                    projects?.map((project, index) => (
                        <div key={index} className="card p-3 mb-3">
                            <h3>{project.name}</h3>
                            <p>{project.description_short}</p>
                            <Button type="button" color="primary" onClick={() => buttonHandleClick(project)}>Detalles</Button>
                        </div>
                    ))
                }
                <Modal isOpen={!!currentProject} toggle={() => setCurrentProject(null)} centered={true}>
                    <ModalHeader>
                        {currentProject?.name}
                    </ModalHeader>
                    <ModalBody>
                        <div className="py-2 px-3">
                            <p>{currentProject?.description_long}</p>
                            <h5>Tecnologías utilizadas:</h5>
                            <ul>
                                {currentProject?.technologies.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                            <a href={currentProject?.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="" onClick={()=> setCurrentProject(null)}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </Modal>
            </Container>
            <Footer />
        </>
    );
}

export default ProjectsPage;
