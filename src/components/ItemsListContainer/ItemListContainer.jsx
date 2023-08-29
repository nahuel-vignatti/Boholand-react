import "./itemlistcontainer.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../itemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [listaProdu, setListaProdu] = useState([]);

  //aca uso el useParams, y en isCategoryRoute tenemos un bool que dara true si
  //entramos a alguna categoria de productos, sino dara false.

  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  let categoryId = params.id;

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    //si estamos filtrando por categoria entra por esta parte del If
    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );

      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setListaProdu(
            docs
              .map((doc) => ({ id: doc.id, ...doc.data() }))
              .sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                } else {
                  return -1;
                }
              })
          );
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setListaProdu(
            docs
              .map((doc) => ({ id: doc.id, ...doc.data() }))
              .sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                } else {
                  return -1;
                }
              })
          );
        })
        .catch((error) => console.log({ error }));
    }
  }, [categoryId]);

  return (
    <main className="cont">
      <ItemList productos={listaProdu} />
    </main>
  );
}

export default ItemListContainer;
