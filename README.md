## **Documentacion**

Este es mi E-commerce, diseñado con la intencion de ir dando forma a una tienda para mi negocio.
Mi proyecto esta subido a Vercel para poder ser navegado en vivo y probar todas sus funcionalidades, independientemente mas abajo estan los GIFs que muestran la navegablidad tambien, el link al proyecto es:

## https://boholand-react.vercel.app/


### **Base de datos**

Se utiliza una base de datos en Firestore, del tipo **noSQL** para almacenar los productos del negocio y los pedidos que realizan los clientes.


### **Stock**

Cuando se realiza una compra ademas de enviar la orden de compra a la base de firestore en **"orders"**, se actualiza el stock real en la base de datos de los items de la coleccion **"items"**


### **Imagenes**

Se utiliza el storage de Firestore para guardar las imagenes y despues poder poner la url en el campo IMG en la base de datos


### **Categorias**

Se reduce la cantidad de categorias de productos a 3 para simplificar la resolucion del trabajo, con el objetivo de añadir mas de ellas en un futuro y mejorar la clasificacion. Asi como tambien la cantidad de productos.


### **Forma de trabajo**

Se trabajo de manera modular, con el objetivo de poder reutilizar los componentes y a su vez que se realizan cambios, poder hacerlos en un solo lugar y que luego se modifique en cada lugar que se utiliza dicho componente.


### **CartEmpty**

Cree un componente CartEmpty para ser utilizado cuando se revisa el carrito y esta vacio, y este fue utilizado en diversas situaciones donde se puede acceder al carrito ya sea clickeando en el icono del carrito o escribiendo la direccion.


## **NAVEGABILIDAD**

Divido la navegabilidad en 3 gifs porque los servidores lo muestran muy lentos sino.


* **PARTE 1**

Mostrando el Home del sitio, la navegacion por categoria y el detalle de los productos.

![cargando gif](https://github.com/antonellabtt/TpFinal-React-Botter/blob/master/src/assets/navegabilidad-1.gif?raw=true)



* **PARTE 2**

Mostrando como se agregan productos al carrito, como se ve el mismo, eliminando productos de a uno y vaciando el carrito

![cargando gif](https://raw.githubusercontent.com/antonellabtt/TpFinal-React-Botter/master/src/assets/navegabilidad-2.gif)


* **PARTE 3**

Mostrando como se agregan los productos al carrito, y como se finaliza la compra, se accede al form para llenar los datos de finalizacion de compra, en dicho form se puede regresar para volver a ver el pedido si se quiere. Una vez llenado los datos se envia la orden de compra y se muestra  una notificacion de confirmacion, con el ID real de la orden de compra realizada.

![cargando gif](https://raw.githubusercontent.com/antonellabtt/TpFinal-React-Botter/master/src/assets/navegabilidad-3.gif)
