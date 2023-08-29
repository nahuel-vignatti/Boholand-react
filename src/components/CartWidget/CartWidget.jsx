import { useContext } from "react";
import carrito from "../../assets/carro.png";
import "./cartwidget.css";
import { Context } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const { productsAdded } = useContext(Context);
  /* el reduce en la siguiente linea es para calcular la cantidad de poductos en el carrito, incluso repetidos */
  let valor = productsAdded.reduce((acc, elem) => acc + elem.quantity, 0);
  if (valor == 0) {
    return (
      <NavLink to={"/cart"}>
        <div className="widget">
          <img src={carrito} alt="" className="imgCarrito" />
        </div>
      </NavLink>
    );
  } else {
    return (
      <NavLink to={"/cart"}>
        <div className="widget">
          <img src={carrito} alt="" className="imgCarrito" />
          <div
            className="badgeCarrito justify-content-center"
            id="badgeCarrito"
          >
            <p className="nroCarrito">{valor}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default CartWidget;
