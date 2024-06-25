import { Card } from "../../components/Card.tsx";

export default function Docs() {
  // Fehlercode-Daten
  const errorCodes = [
    { code: 1001, description: "Fehler beim Laden der Daten." },
    { code: 1002, description: "Ungültige Eingabe." },
    { code: 1003, description: "Verbindung zum Server fehlgeschlagen." },
    { code: 1004, description: "Zugriff verweigert." },
    { code: 1005, description: "Ungültige Authentifizierung." },
    { code: 1006, description: "Datei nicht gefunden." },
    { code: 1007, description: "Fehler beim Speichern der Daten." },
    { code: 1008, description: "Serverzeitüberschreitung." },
    { code: 1009, description: "Ungültige Anforderung." },
    { code: 1010, description: "Datenbankfehler." },
  ];

  // Fehlercode-Komponente

  interface ErrorProps {
    code: number;
    description: string;
  }

  const ErrorCode = ({ code, description }: ErrorProps) => (
    // <Card id={code.toString()} style={styles.errorCode}>
    //   <h2 style={styles.code}>{code}</h2>
    //   <p style={styles.description}>{description}</p>
    // </Card>
    <Card id={code.toString()} style={styles.errorCode}>
      <h2 style={styles.code}>{code}</h2>
      <p style={styles.description}>{description}</p>
    </Card>
  );

  // Fehlercode-Liste
  const ErrorCodeList = () => (
    <div style={styles.errorCodeList}>
      <h1 style={styles.title}>Error codes</h1>
      {errorCodes.map((errorCode) => (
        <ErrorCode
          key={errorCode.code}
          code={errorCode.code}
          description={errorCode.description}
        />
      ))}
    </div>
  );

  // CSS-Stile als Objekt
  const styles = {
    errorCodeList: {
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
    },
    errorCode: {
      marginBottom: "20px",
      padding: "15px",
      backgroundColor: "#fff",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    code: {
      margin: "0",
      fontSize: "24px",
      color: "#007bff",
    },
    description: {
      marginTop: "5px",
    },
  };

  return <ErrorCodeList />;
}
