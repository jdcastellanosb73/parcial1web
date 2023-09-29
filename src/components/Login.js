import React, {useState, useEffect} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

function Login(props){

  // entrada del usuario
  const navigate = useNavigate();
  const[logins, setLogins] = useState(true);
  const [formValues, setFormValues] = useState({email:"", password:"",role:true})
  const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})

// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
  // Si nada da error
  if (this.status == 200) {
    // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    console.log(JSON.parse(this.responseText));
  }
  else
  console.log(JSON.parse(this.responseText));
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("POST", "http://localhost3001/login", true);
xhttp.setRequestHeader("Content-type", "application/json");

// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
 var valorARevisar = xhttp.send(Login);
 // Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
 var valorARevisar2 = xhttp.send(password);

  //click para continuar
  const clickContinuar = (() => {

    //se verifica que sea el email correcto
    if (formValues.email.match(valorARevisar)) {
        setValidationStates({ ...validationStates, emailState: true });
        setLogins(false);
        }
    else if (!formValues.email.match(valorARevisar)) {
        setValidationStates({ ...validationStates, emailState: false });
        }
    })

    //se verifica que sea el email correcto
    if (formValues.password.match(valorARevisar2)) {
      setValidationStates({ ...validationStates, passwordState: true });
      setLogins(false);
      }
  else if (!formValues.password.match(valorARevisar2)) {
      setValidationStates({ ...validationStates, passwordState: false });
      }
  }

  
  const clickSubmit = (() => {
    if (validationStates.emailState && validationStates.passwordState) {
      handlePost();
    } else if (!formValues.email.match(valorARevisar)) {
      setValidationStates({ ...validationStates, emailState: false });
    } else if (!formValues.password.match(valorARevisar2)) {
      setValidationStates({ ...validationStates, passwordState: false });
    }
    })
    const exampleJSON = { email: formValues.email, password: formValues.password}

    async function handlePost() {
      console.log("Envio de Post")
      console.log(JSON.stringify(exampleJSON))
      navigate("/cafes" )
    };

    return(
        <Container>
    <Row>
        <Col style={{backgroundColor: 'white'}}>
        {(logins ) && 
            <Form>
                <Form.Group className='mb-6' controlId='formBasicEmail'>
                    <h3>Nombre de</h3>
                    <Form.Control type='email' placeholder='Enter email' onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''}/>
                    {!validationStates.emailState &&  <Form.Text className='text-muted'>Error de autenticaciòn. Revise sus credenciales.</Form.Text>}
                 </Form.Group>
                 <Button  onClick={clickContinuar} >
                        Continuar
                </Button> 
            </Form>
        }
        {(!logins ) &&      
            <Form>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                    <h3> {formValues.email}</h3>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''}/>
                    { !validationStates.passwordState && <Form.Text className="text-muted">Error de autenticaciòn. Revise sus credenciales.</Form.Text>} 
                </Form.Group>

                <Button variant="primary" onClick={clickSubmit} className="w-25 btn-secondary rounded-pille"  >
                    Ingresar
                </Button>
                <Button variant="primary" onClick={clickSubmit} className="w-25 btn-secondary rounded-pille"  >
                    Cancelar
                </Button>
            </Form>
        } 
        </Col>
    </Row>
    </Container>
    );

export default Login;