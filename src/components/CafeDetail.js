import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {FormattedMessage, FormattedDate} from 'react-intl';



function CafeDetail() {

    const [cafes, datosCafes] = useState([]);

    const [CafeSelecionado, setCafeSelecionado] = useState(null);

    const handleClick = (cafe) => {
        fetch(`http://localhost:3001/cafes/${cafe.id}`)
            .then(response => response.json())
            .then(data => setCafeSelecionado(data))}

    useEffect(() => {
        fetch('http://localhost:3001/cafes')
            .then(response => response.json())
            .then(data => datosCafes(data))
    }, [])

    return (
            <Container>
                    <Row>
                        <h1><FormattedMessage id="The magic aroma"/></h1>
                    </Row>
                    <Row>
                        <img src="/header.png"/>
                    </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <table className="table">
                                <tr>
                                    <th>#</th>
                                    <th><FormattedMessage id="Name"/></th>
                                    <th><FormattedMessage id="Type"/></th>
                                    <th><FormattedMessage id="Region"/></th>
                                </tr>
                            <tbody>
                                {cafes.map((cafe) => (
                                    <tr key={cafe.id} onClick={() => handleClick(cafe)} className="cafe-list">
                                        <td>{cafe.id}</td><td>{cafe.nombre}</td><td>{cafe.tipo}</td><td>{cafe.region}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                    {
                    CafeSelecionado &&
                        <Col xs={2} md={2}>
                            <Card>
                                    <Card.Title>{CafeSelecionado.nombre}</Card.Title>
                                    <Card.Text >
                                    <FormattedDate
                                            value={new Date(CafeSelecionado.fecha_cultivo)}
                                            year='numeric'
                                            month='long'
                                            day='numeric'
                                            weekday='long'
                                    />
                                    </Card.Text>
                                        <Card.Img src={CafeSelecionado.imagen} />
                                        <Card.Text><FormattedMessage id="Notes"/></Card.Text>
                                        <Card.Text>  {CafeSelecionado.notas}</Card.Text>
                                        <Card.Text><FormattedMessage id="Cultivated at an altitude of"/>{CafeSelecionado.altura}<FormattedMessage id="masl"/></Card.Text>
                            </Card>
                        </Col>
                    }
                </Row>
            </Container>
    )
}

export default CafeDetail;