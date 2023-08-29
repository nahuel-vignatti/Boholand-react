import emptyCart from "../../assets/cartempty.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./cartempty.css";

function CartEmpty() {
  //este componente solo muestra una imagen y un boton para seguir comprando cuando  
  //se accede al carrito o al checkout y el carrito esta vacio.
  return (
    <section className="carritoVacio d-flex flex-column align-items-center align-content-center">
      <h1 className="emptyCartTitle mt-3">Su carrito esta vacio</h1>
      <img
        src={emptyCart}
        alt="Su Carrito esta vacio"
        className="imgCartEmpty mb-5 mt-5"
      />
      <NavLink to={"/"}>
        <Button variant="secondary" className="btnVolver mb-5">Ir a Comprar! </Button>{" "}
      </NavLink>
    </section>
  );
}
export default CartEmpty;
