import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
  // PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";
import dataService from "../reducers/data";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: 12,
  },
  container: {
    padding: "30px 50px",
  },
  header: {
    backgroundColor: "#437c54ff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    color: "white",
  },
  title: {
    fontSize: 42,
    lineHeight: 0.8,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  spaceY: {
    display: "flex",
    flexDirection: "column",
    gap: "2px"
  },
  billTo: {
    marginBottom: 10,
  },
  historyItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
    flexDirection: "row",
  },
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
        <View style={[styles.header, styles.container]}>
          <View>
            <Text style={[styles.textBold]}>{rolesText}</Text>
            <Text style={[styles.title, { marginBottom: 10 }]}>{data.personal_info.fullname}</Text>
            <Text>{data.personal_info.location.city}, {data.personal_info.location.country} | {data.personal_info.phone}</Text>
            <Text>{data.personal_info.email} | {data.personal_info.social_links[0].url}</Text>
          </View>
        </View>

        <View style={[styles.container]}>
          <Text style={[styles.billTo, styles.textBold]}>Sobre mí:</Text>
          {
            data.about_me.split('\n').map((line, index) => (
              <Text key={index}>{line}</Text>
            ))
          }
        </View>

        <View style={styles.container}>
          <Text style={[styles.billTo, styles.textBold]}>Proyectos:</Text>
          {
            data.projects?.map((pro, index) => (
              <View style={styles.historyItem}>
                <View key={index} style={{ marginBottom: 10 }}>
                  <Text style={[styles.textBold, { borderBottom: "1px solid black", marginBottom: 10, paddingBottom: 10 }]}>{pro.name}</Text>
                  <Text>{pro.description_long}</Text>
                  <Text style={[styles.textBold, { margin: '10px 0' }]}>Tecnologías:</Text>
                  <Text style={{ marginLeft: 10, marginTop: 2 }}>
                    {
                      pro.technologies.map((responsibility, respIndex) => (
                        responsibility + (respIndex !== pro.technologies.length - 1 ? ' — ' : '')
                      ))
                    }
                  </Text>
                </View>
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