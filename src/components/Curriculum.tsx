import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";
import dataService from "../reducers/data";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: "12px",
    padding: "30px 50px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  spaceY: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    marginBottom: 10,
  },
  billTo: {
    marginBottom: 10,
  },
  table: {
    width: "100%",
    borderColor: "1px solid #f3f4f6",
    margin: "20px 0",
  },
  tableHeader: {
    backgroundColor: "#e5e5e5",
  },
  td: {
    padding: 6,
  },
  totals: {
    display: "flex",
    alignItems: "flex-end",
  }
});

export default function MyDocument() {
  const data = dataService.getAllData();
  let rolesText = '';
  for (let i = 0; i < data.roles.length; i++) {
    rolesText += data.roles[i];
    if (i !== data.roles.length - 1) {
      rolesText += ' — ';
    }
  }
  const InvoicePDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, styles.textBold]}>{data.personal_info.fullname}</Text>
            <Text>{rolesText}</Text>
          </View>
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Sobre mí:</Text>
          {
            data.about_me.split('\n').map((line, index) => (
              <Text key={index}>{line}</Text>
            ))
          }
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Experiencia:</Text>
          {
            data.experience.map((exp, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.textBold}>{exp.position} en {exp.company} ({exp.duration})</Text>
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <Text key={respIndex} style={{ marginLeft: 10, marginTop: 2 }}>
                    • {responsibility}
                  </Text>
                ))}
              </View>
            ))
          }
        </View>

        <View style={styles.spaceY}>
          <Text style={[styles.billTo, styles.textBold]}>Proyectos:</Text>
          {
            data.projects?.map((pro, index) => (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text style={styles.textBold}>{pro.name}</Text>
                <Text>{pro.description_long}</Text>
                <Text style={styles.textBold}>Tecnologías:</Text>
                {pro.technologies.map((responsibility, respIndex) => (
                  <Text key={respIndex} style={{ marginLeft: 10, marginTop: 2 }}>
                    • {responsibility}
                  </Text>
                ))}
              </View>
            ))
          }
        </View>
      </Page>
    </Document>
  );
  return (
    <div className="container page">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-4">
            <h1 className="page-title mb-4">Descargar CV</h1>
            <p className="fs-5 mb-4">Descarga mi currículum vitae en formato PDF</p>

            <PDFDownloadLink document={<InvoicePDF />} fileName="Roosevelt_Remache_CV.pdf">
              {({ loading }) => (
                <button
                  className="btn btn-primary btn-lg px-5 py-3 mb-4"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Generando PDF...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-download me-2"></i>
                      Descargar CV
                    </>
                  )}
                </button>
              )}
            </PDFDownloadLink>

            <div className="mb-4">
              <small className="text-secondary">
                El archivo se descargará automáticamente al hacer clic
              </small>
            </div>
          </div>

          {/* PREVISUALIZACIÓN TEMPORAL PARA DEBUG */}
          {/* <div className="row">
            <div className="col-12">
              <div className="border border-secondary p-3 mb-4">
                <div style={{ height: '600px', width: '100%' }}>
                  <PDFViewer
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                  >
                    <InvoicePDF />
                  </PDFViewer>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}