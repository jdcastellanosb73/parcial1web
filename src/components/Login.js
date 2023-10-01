import { useState } from 'react';
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {FormattedMessage, FormattedDate} from 'react-intl';


function Login() {

    const [valores , datosValores] = useState({ login: "", password: "" });

    const [error, datosError] = useState(false);

    const handleSubmit = (e) => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(valores),
        })
            .then(response => {
                if (response.status === 200) {
                    datosError(false);
                    window.location.href = "/cafes";
                } else {
                    datosError(true);
                }
            })
            .catch(error => {
                console.log(error);
            }
            );
    }

    const handleCancel = (e) => {
    }

    return (
            <Container>
                    <Col xs={10} md={10} xl={10} xxl={10}>
                                <Row>
                                    <h1><FormattedMessage id="The magic aroma"/></h1>
                                </Row>
                                <Row>
                                    <img src="/header.png"/>
                                </Row>
                            <Card >
                            <p>Inicio de sesion</p>
                                        <Col xs={12} md={12} xl={12} xxl={12}>
                                            <Card.Subtitle><FormattedMessage id="Username"/></Card.Subtitle>
                                        </Col>
                                        <Col xs={10} md={10} xl={10} xxl={10}>
                                            <input type="text" onChange={(e) => datosValores({ ...valores, login: e.target.value })} />
                                        </Col>
                                        <Col xs={10} md={10} xl={10} xxl={10}>
                                            <Card.Subtitle><FormattedMessage id="Password"/></Card.Subtitle>
                                        </Col>

                                    <Row>
                                        <Col xs={10} md={10} xl={10} xxl={10}>
                                            <input type="password" onChange={(e) => datosValores({ ...valores, password: e.target.value })} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} md={3}>
                                            <button onClick={handleSubmit}><FormattedMessage id="Sign-in"/></button>
                                        </Col>
                                        <Col xs={3} md={3} className="text-end">
                                            <button onClick={handleCancel}><FormattedMessage id="Cancel"/></button>
                                        </Col>
                                    </Row>
                                    {error &&
                                        <Row>
                                            <Col xs={10} md={10} xl={10} xxl={10}>
                                                <p><FormattedMessage id="Authentication error. Check your credentials"/></p>
                                            </Col>
                                        </Row>
                                    }
                            </Card>
                            <p>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
                        </Col>
                </Container>
    );
}

export default Login;