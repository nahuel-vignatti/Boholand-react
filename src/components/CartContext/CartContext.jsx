import { createContext, useState } from "react";

export const Context = createContext();

function CartContext({ children }) {
  //productsAdded contiene la lista de productos agregados al carrito
  const [productsAdded, setProductsAdded] = useState([]);

  //funcion que agrega un producto al carrito
  function onAdd(product, quantity) {
    const isAlreadyAdded = isInCart(product);

    //si el producto ya se encuentra en el carrito debemos actualizar su cantidad
    if (isAlreadyAdded) {
      //se guarda el producto que queremos modificar
      const productToModify = productsAdded.find(
        (produ) => produ.id === product.id
      );

      //al producto que queremos modificar le sumamos a su anterior cantidad la nueva cantidad agregada
      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      //actualizamos la lista de productos del carrito haciendo un map, que deja todos los productos
      //como estaban, pero cuando encuentra el producto que se esta modificando, lo que devuelve es el producto actualizado
      setProductsAdded((prevState) =>
        prevState.map((produ) =>
          produ.id === product.id ? productModified : produ
        )
      );
    } else {
      //si el producto no estaba en el carrito simplemente se lo agrega
      setProductsAdded((prevState) =>
        prevState.concat({ ...product, quantity })
      );
    }
  }

  //funcion que borra el item deseado de los productos del carrito
  function removeItem(itemId) {
    let bandera = confirm("Esta seguro que desea borrar este Articulo?");
    if (bandera) {
      let arrayAux = productsAdded.filter((elem) => elem.id != itemId);
      setProductsAdded(arrayAux);
    }
  }

  //funcion que devuelve true or false si el item pasado esta dentro de los items del carrito
  function isInCart(product) {
    return productsAdded.some((productAdded) => productAdded.id === product.id);
  }
  
  //funcion que borra todos los productos del carrito.
  function clear() {
    setProductsAdded([]);
  }
  const value = {
    productsAdded,
    onAdd,
    removeItem,
    setProductsAdded,
    clear,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default CartContext;
