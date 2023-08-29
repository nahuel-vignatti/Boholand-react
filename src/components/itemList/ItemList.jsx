import './itemlist.css'
import Item from "../Item/Item";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import spinner from '../../assets/spinner.gif'


function ItemList ({productos}){
    //en este componente armamos la lista de los productos que queremos mostrar, mientras no esten cargados aun
    //se muestra una imagen de carga
    return <Container fluid> 
        <Row className='gap-3 justify-content-center'>
            <h1 className='text-center titulo'>Productos</h1>
            {!productos.length && <img src={spinner} alt="cargando..." className='cargandoImg'/>}
            {productos.map((elemento,index) =>(<Item producto={elemento} key={elemento.id}/>))}
            
        </Row>      
    </Container>
}
export default ItemList;

