import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function ArticuloDetail(props){

    const params = useParams();
    console.log(params.articuloId)
    const [articulos, setArticulo] = useState([]);

    useEffect(() => { 
        //cambiar url para los datos.
        const URL ="https://raw.githubusercontent.com/montejs3/ParcialReact/main/datos.json";
        fetch(URL).then(data => data.json())
        .then(data =>{setArticulo(data);
        }); 
    }, []);

   console.log(articulos)
   const especial = articulos.find((articulo) => articulo.carModel === (params.articuloId)) || {};

    return(
        <div>
        <h1>Detalle de articulo</h1>
        <hr></hr>
        <div className="align-self">
        <Card style={{ width: '45rem', height: '30rem' }} className="mb-3" >

           <Card.Body>
            <Row>
               <Col>
               <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={especial.image}
                    alt={especial.description}
                />
               </Col>

               <Col>
                <Card.Title>
                    // cambiar el titulo cuando sea necesario.
                    <h1>   {especial.carModel}</h1>
                </Card.Title>
                <hr></hr>
                <Card.Text> Card Maker: {especial.carMaker} </Card.Text>
                <Card.Text> Card Model: {especial.carModel} </Card.Text>
                <Card.Text> Card Year: {especial.carYear} </Card.Text>
                <Card.Text> Card Available Online:  {especial.available} </Card.Text>
                <Card.Text> Card Price: {especial.price} </Card.Text>
                <Card.Text> Card Description</Card.Text>
                <p>{especial.description} </p>
               </Col>
               
               </Row>
           </Card.Body>
       </Card>
       </div>
 
        </div>
    )
}

export default ArticuloDetail;