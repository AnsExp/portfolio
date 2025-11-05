import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import WorkWithMePage from "./WorkWithMePage";
import ProjectsPage from "./ProjectsPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/work-with-me" element={<WorkWithMePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
