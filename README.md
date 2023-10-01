## Correr aplicación
Antes de empezar a usar la aplicación, se debe correr este comando: `npm install`
<br>

Una vez se haya hecho esto, se puede iniciar la app: `npm start`
<br>

Si llega a haber error por paquetes, intentar correr los siguientes comandos:

- `npm install react-bootstrap bootstrap`
- `npm install react-router-dom`
- `npm install react-intl`

Con la app corriendo, ingresar a la siguiente ruta: [http://localhost:3000/login](http://localhost:3000/login)

## Elementos React
Los elementos de React usados fueron:
- Route -> Utilizado para definir las rutas (/login, /home, /home/:carModel)
- Form -> Utilizado para definir los formularios de correo y contraseña.
- FormattedMessage -> Utilizado para la i18n.
- Card -> Utilizado para las tarjetas de carros de la vista /home.
- Col -> Importando desde Bootstrap, utilizado para definir columnas.

## Proceso de desarrollo (en el parcial)
Para el desarrollo de la aplicación, lo primero se identificaron las vistas necesarias. Estas son (cafe,cafes, cafedetails y login).De esta forma se crea un componente para cada vista. Para el componente de login, como se tiene dos vistas (usuario y contraseña), se tomo la decision de trabajar de una forma diferente el componente, puesto que la lectura no se hacia por un fetch, sino que se hacia un XHTTPrequest. Este verificaba mediante un booleano el con el status=== a 200 y sacaba los valores, luego de esto se tenian diferentes parametros para usuario y contraseña y mediante el uso de una función y los comparaba y de esta forma se daba acceso al usuario.En este mismo componente se realizan las validaciones. una vez estos sean verificados se ingresan en la consola en el formulario. una vez ingresa, se hace eso del componente cafes, en el cual se hace fetch de la información en el cual se hace un array (map) con los datos del cafe. una vez se tiene esto lo que se muestra una vez ingresa el usuario es el componente cafe, el cual mediante el uso del id muesta la informacion del cafe, tal como: id, nombre,tipo,region. falto definir que estas tarjetas fueran clickleables, pero una vez les hicieran click se cargaba el componente de cafeDetails el buscaba mediante el id el cafe y este mostraba en una carta su información.

## Componentes (en el parcial)
- App -> Carga todos los componentes.
- Permisos (login) -> Realiza el login del usuario, verifica que los campos cumplan las condiciones.
- Cafes -> Hace fetch a todos datos (GET) y los guarda en un mapa.
- Cafe  -> Hace uso del mapa y muestra sus detalles y muestra sus detalles.
- CafeDetail -> Hace fetch a todos datos (GET) y busca el cafe mediante el ID, una vez encontrado este muestra los detalles del cafe en una carta.

## Proceso de desarrollo (Despues del parcial) 

Este proceso del desarrollo del parcial se hace para que se pueda hacer la internacionalización. 
En este caso se volvio a hacer la aplicación para que funcionara de manera correcta. Lo principal es que se tienen dos componetes hijos de App, los cuales son los dos que se usan para hacer la aplicacion. Tambien cabe mencionar que no se realizaron cambios esteticos, puesto que este es para el funcionamiento del i18n y no es calificable, lo primero que se hizo es que se dejaron dos componentes, login y cafeDetails. En cuanto al componente login, se cargan los datos mediante un fetch, se verifica con un booleano que reciba el status de 200 para saber que esta conectado y en estos se hace la autenticación de los valores.
el segundo componente es cafeDetails, donde se hacen dos fetch, uno para cafes (los datos del cafe) y el segundo fetch para los cafe.id el cual tiene los datos acorde al id. En este se genera la tabla con los valores sacados del fetch de cafe, de igual manera se le puso la funcion al click para que cuando haga click en la tabla este saque los datos del segundo fetch en una carta. y de esta forma funcione correctamente y se pueda hacer la internacionalización.

## Componentes (en el parcial)
- App -> Carga todos los componentes.
- Permisos (login) -> Hace fetch a todos datos (POST) Realiza el login del usuario, verifica que los campos cumplan las condiciones, se añade la funcion click para que se dirija a los cafes una vez se compruebe con los botones.
- CafesDetail -> Hace fetch a todos datos (GET) y los guarda en diferentes arreglos, con el fin de poder hacer la tabla y poder sacar la carta con los detalles del cafe. 

## i18n:
npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
se añadio i18n mediante el uso del comando:npm install i18next react-i18next i18next-browser-languagedetector
La app cambia el idioma atomáticamente (entre EN y ES) dependiendo del idioma del navegador. Si se está usando Chrome, ir a configuración -> idiomas y mover inglés o español al principio de la pila. Si por alguna razón la app no puede reconocer el idioma o se está en otro diferente a español o inglés, se selecciona automáticamente inglés.

### APP.
<img width="800" alt="App" src="[landing.jpg](https://postimg.cc/Dm1M90sj)">


### tabla con los cafes.
<img width="800" alt="tabla de los cafes" src="[image-2023-09-30-233102499.png](https://postimg.cc/62f1G19s)">


### información detallada cafes.
<img width="800" alt="informacion detallada" src="![image](https://github.com/jdcastellanosb73/parcial1web/assets/53950946/b1df7fbc-5834-4a58-818f-75e484a7ffcf)
">
