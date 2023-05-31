import NavbarD from "../components/navbar";
import Footer from "../components/footer";

import Intro1 from "../assets/images/pao4.png";
import Intro2 from "../assets/images/pao2.png";
import Intro3 from "../assets/images/pao3.jpg";

import pao from "../assets/images/pao.jpg";
import sonho from "../assets/images/sonho.jpg";
import broa from "../assets/images/broa.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const produtos = [
  {
    nome: "Pão de Queijo",
    preco: "R$ 3,99",
    img: pao,
  },
  {
    nome: "Sonho",
    preco: "R$ 5,00",
    img: sonho,
  },
  {
    nome: "Broa",
    preco: "R$ 4,00",
    img: broa,
  },
];
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavbarD />

      <section>
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="tadeu">Padaria do Tadeu</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro3} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="tadeu">Padaria do Tadeu</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Intro2} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="tadeu">Padaria do Tadeu</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="Produtos row ha">
          {produtos.map(({ nome, preco, img }) => (
            <Card style={{ width: "18rem" }} key={nome}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Text className="e">{nome}</Card.Text>
                <Card.Title className="f">{preco}</Card.Title>
                <Button variant="primary">Adicionar ao carrinho</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Home;
