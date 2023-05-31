import Card from "react-bootstrap/Card";
import "../assets/css/style.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <>
      <Card className="footer bom">
        <Container>
          <Card.Body>
            <Card.Title>Trabalho de React</Card.Title>
            <Card.Text>Feito por Eric Yuji Ito</Card.Text>
          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
export default Footer;
