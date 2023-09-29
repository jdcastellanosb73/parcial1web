import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Articulo from "./Articulo";

function Articulos(){
    //cambiar articulos por el objeto que piden.
    const [articulos, setArticulos] = useState([]);
    
    useEffect(() => {
        //datos de donde salen los objetos es un .json
        const URL ="https://raw.githubusercontent.com/montejs3/ParcialReact/main/datos.json";
        fetch(URL).then(data => data.json()).then(data =>{
            setArticulos(data);
        }); 
    }, []);

    return(
        <div className="container">
           <h2 className="mt-2">Listado de Articulos</h2>
            <hr></hr>
            <Row>
                {articulos.map(articulo =>(
                <Col>
                <Articulo articulo={articulo} /> 
                </Col>) )
                }

            </Row>
        </div>
                
    )
}

export default Articulos;