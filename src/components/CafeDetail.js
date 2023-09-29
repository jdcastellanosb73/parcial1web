import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function CafeDetail(props){

    const params = useParams();
    console.log(params.cafeId)
    const [cafes, setCafe] = useState([]);

    useEffect(() => { 
        const URL ="http://localhost:3001/GET/cafes/{{cafe_id}}";
        fetch(URL).then(data => data.json())
        .then(data =>{setArticulo(data);
        }); 
    }, []);

   console.log(cafes)
   const especial = cafes.find((cafe) => cafe.id === (params.cafeId)) || {};

    return(
        <div>
        <h1>Detalle de cafe</h1>
        <hr></hr>
        <div className="align-self">
        <Card style={{ width: '45rem', height: '30rem' }} className="mb-3" >

           <Card.Body>
            <Row>
               <Col>
               <Card.Img
                    style={{ height: "14rem" }}
                    variant="top"
                    src={especial.imagen}
                    alt={especial.description}
                />
               </Col>

               <Col>
                <Card.Title>
                    <h1>   {especial.nombre}</h1>
                    <Card.Text> Card Fecha: {especial.fecha_cultivo} </Card.Text>
                </Card.Title>
                <hr></hr>
                <Card.Text> Card Notas: {especial.notas} </Card.Text>
                <Card.Text> cultivado a una altura de:  {especial.altura} </Card.Text>
               </Col>
               </Row>
           </Card.Body>
       </Card>
       </div>
        </div>
    )
}
export default CafeDetail;