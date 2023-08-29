import "./itemcount.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
function ItemCount({ stock, precio, onAdd, initial }) {
  const [cant, setCant] = useState(initial);

  //se arma el componente con el precio y los botones para comprar mas cantidad y agregar al carrito
  //importante destacar, que si la cantidad a agregar es 1 el boton del "-" se deshabilita
  //asi como tambien se deshabilita el boton del "+" cuando se llega a una cantidad igual al stock
  // del producto, para que no se pueda agregar mas cantida de la que hay en stock
  return (
    <Container fluid className="d-flex flex-column align-items-center ctnCount">
      <h4>Precio: ${precio}</h4>
      <p>
        <strong>Unidades Disponibles: </strong>
        {stock}
      </p>
      <div className="lineaBotones">
        <Button
          variant="light"
          onClick={() => setCant((prevState) => prevState - 1)}
          className="botonCant"
          disabled={cant < 2}>
          -
        </Button>{" "}
        <h4>{cant}</h4>
        <Button
          variant="light"
          onClick={() => setCant((prevState) => prevState + 1)}
          className="botonCant"
          disabled={cant === stock}>
          +
        </Button>{" "}
      </div>
      <Button
        variant="secondary"
        onClick={() => onAdd(cant)}
        className="botonAgregar mb-3"
      >
        Agregar Al carrito
      </Button>{" "}
    </Container>
  );
}

export default ItemCount;
