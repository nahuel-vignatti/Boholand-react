import "./itemdetailcontainer.css";
import { useId, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import spinner from "../../assets/spinner.gif";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const parametros = useParams();
  const itemId = parametros.id;

  //aca se carga desde la base de datos el producto buscado
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", itemId);

    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  //mientras no este cargado aun el producto mostramos una imagen de carga
  if (!producto) {
    return (
      <div className="d-flex flex-row justify-content-center">
        <img src={spinner} alt="cargando..." className="cargandoImg" />
      </div>
    );
  }
  return (
    <main className="itemDetail d-flex flex-column align-items-center">
      <ItemDetail producto={producto} />
    </main>
  );
}

export default ItemDetailContainer;
