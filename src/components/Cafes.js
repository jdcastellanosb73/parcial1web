import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Cafe from "./Cafe";

function Cafes(){
    //cambiar articulos por el objeto que piden.
    const [cafes, setCafes] = useState([]);
    
    useEffect(() => {
        //datos de donde salen los objetos es un .json
        const URL ="http://localhost:3001/GET/cafes";
        fetch(URL).then(data => data.json()).then(data =>{
            setArticulos(data);
        }); 
    }, []);

    return(
        <div className="container">
           <h2 className="mt-2">Listado de Cafes</h2>
            <hr></hr>
            <Row>
                {cafes.map(cafe =>(
                <Col>
                <Articulo cafe={cafe} /> 
                </Col>) )
                }

            </Row>
        </div>
                
    )
}

export default Cafes;