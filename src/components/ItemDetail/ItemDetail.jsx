import ItemCount from "../ItemCount/ItemCount";
import { Container, Button } from "react-bootstrap";
import "./itemdetail.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../CartContext/CartContext";

function ItemDetail({ producto }) {
  const { onAdd } = useContext(Context);
  const [added, setAdded] = useState(0);

  //esta funcion agrega los productos al carrito con onAdd generada en el context
  //pero ademas usamos "added" para saber si se agrego un producto y en tal caso
  //sacar el componente itemCount y mostrar el boton para finalizar la compra
  function onAddProduct(cant) {
    setAdded(cant);
    onAdd(producto, cant);
  }

  return (
    <Container className="row gap-5 ctnTotal justify-content-center align-items-center align-items-md-start">
      <div className="col-6 col-md-4 imgCtn d-flex flex-row justify-content-center">
        <img src={producto.img} alt="imagen de producto" className="imgProdu" />
      </div>
      <div className="col-11 col-md-7 infoProdu">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        {added == 0 && (
          <ItemCount
            stock={producto.stock}
            precio={producto.price}
            onAdd={onAddProduct}
            initial={1}
          />
        )}

        {added >= 1 && (
          <div className="ctas-container d-flex flex-column justify-content-center align-items-center gap-2">
            <NavLink to={"/cart"}>
              <Button variant="secondary" className="btnCompras">
                Terminar Compra
              </Button>{" "}
            </NavLink>
          </div>
        )}

        <NavLink to={"/"}>
          <Button variant="secondary" className="btnSeguir mt-3">
            Seguir Comprando
          </Button>{" "}
        </NavLink>
      </div>
    </Container>
  );
}

export default ItemDetail;
