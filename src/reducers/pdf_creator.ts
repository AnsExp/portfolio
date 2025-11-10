import jsPDF from "jspdf";
import { DataService } from "./data";

function create(): jsPDF {
    const data = DataService.getInstance().getAllData();
    const doc = new jsPDF();
    const margins = {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
    };

    doc.setProperties({
        title: 'Curriculum Vitae - Roosevelt Remache',
        subject: 'Portafolio de Proyectos y Habilidades',
        author: 'Roosevelt Remache',
        creator: 'https://ansexp.github.io/portfolio/'
    });

    doc
    .setFont('helvetica', 'bold')
    .setFontSize(24)
    .setTextColor('#2563eb')
    .text(data.personal_info.fullname, margins.left, margins.top);

    return doc;
}

export { create };