import { useContext } from "react";
import "./checkout.css";
import { NavLink } from "react-router-dom";
import { Button,Form } from "react-bootstrap";
import { Context } from "../CartContext/CartContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import { addDoc,collection,doc,getFirestore,updateDoc, } from "firebase/firestore";


function Checkout(){
    const {productsAdded,clear} = useContext(Context);
    const db = getFirestore();

    //funcion que actualizara el stock un item en la tabla Items de la base de datos
    function updateOrder(productId,finalStock){
        const itemRef = doc(db,"items",productId);
        updateDoc(itemRef,{stock: finalStock}).catch((error)=> console.log(error));
    }

    //funcion que arma la orden de pedido en la tabla Orders de la base de datos
    function sendOrder(){

        const name = document.getElementById("formName").value;
        const phone = document.getElementById("formPhone").value;
        const email = document.getElementById("formEmail").value;

        const collectionRef = collection(db,"orders");
        const total = productsAdded.reduce((accum,elem)=> accum + (elem.quantity * elem.price),0);
        const fecha = new Date().toLocaleDateString();
        //con los datos obtenidos y calculados arriba armarmos la orden a guardar en la base
        const order = {
            buyer: {name: `${name}`,email:`${email}`,phone:`${phone}`},
            items: productsAdded,
            fecha,
            total,
        };
        //se guarda en la base de datos la orden y luego se llama a updateOrder por cada producto 
        //que habia en el carrito para que actualice su stock luego de haber realizado este pedido

        addDoc(collectionRef,order)
            .then((response )=>{
                productsAdded.map((product)=>{
                    const finalStock = product.stock - product.quantity;
                    updateOrder(product.id,finalStock);
                });
                //alerta de confirmacion de la compra con el ID que le asigno la base de datos a esta orden de pedido
                alert(`Pedido enviado con Exito! -- #Nro Pedido: ${response.id}`);
                clear();
                
            })
            .catch((error)=>console.log(error));              

    }


    if(productsAdded.length > 0){
        return(
            <section className="d-flex flex-column align-items-center mb-5">
                <h3 className="mb-5 mt-3">Para Finalizar su pedido, complete el formulario</h3>
                <form id="formu" name="formu" className="formu d-flex flex-column align-items-center w-25 gap-2 mb-3">                
                    
                    <Form.Label className="textoLabel">Nombre Completo</Form.Label>
                    <Form.Control id="formName" type="text" placeholder="Ingrese Nombre completo" required/>

                    <Form.Label className="textoLabel">Telefono</Form.Label>
                    <Form.Control id="formPhone" type="number" placeholder="Ingrese telefono" required/>

                    <Form.Label className="textoLabel">Email</Form.Label>
                    <Form.Control id="formEmail" type="email" placeholder="Ingrese su email" required/>
                    <NavLink to={'/cart'}>
                        <Button variant="secondary" className="mt-3 formVer" >Ver Pedido </Button>{" "}
                    </NavLink>
                    <Button variant="secondary" className="formEnviar" onClick={sendOrder} >Enviar Pedido </Button>{" "}
                </form>
            </section>
        );
    }else{
       return (
        <CartEmpty />
       );
    }

}

export default Checkout;