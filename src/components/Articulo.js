
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

//se llama la funcion del objeto. 

function Articulo(props){
   return(
    //se cambia el tamaño el cual esta en rem 
    //cambiar articulo por el objeto el cual se tiene y el . lo que piden :3
       <Card style={{ width: '18rem', height: '24rem' }} className="">

           <Card.Body>
               <Card.Title>
               <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={props.articulo.image}
                    alt={props.articulo.description}
                />
               <Link to={"/articulos/" + props.articulo.carModel}  > 
                {props.articulo.carModel}
                </Link>
                </Card.Title>
             
               <Card.Text> Euros: {props.articulo.price} - {props.articulo.carYear}  </Card.Text>
            
           </Card.Body>
       </Card>
   );
}

export default Articulo;