import "bootstrap/dist/css/bootstrap.min.css";
import NavbarD from "../components/navbar";
import Footer from "../components/footer";

function Sobre() {
  return (
    <>
      <NavbarD />
      <div className="sobre">
        <h1>Sobre</h1>
        <p className="sobremim">
        A vida anda muito corrida e você ainda não teve tempo de comer alguma coisa? Então dê uma passadinha na nossa padaria e confira os nossos produtos! Sempre fresquinho e de altíssima qualidade! O tadeu te deseja um bom apetite!
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Sobre;
