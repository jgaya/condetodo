---
path: Preguntas de Entrevista ReactJs
date: 2022-09-10T19:18:59.794Z
title: Preguntas de Entrevista ReactJs
thumbnail: assets/react-logo_418x418.png
description: Preguntas comunes y conceptos de ReactJs para tener en cuenta en entrevistas.
tags:
  - web
---
## ¿Q﻿ue es JSX?

E﻿s un extension sintáctica a JavaScript para poder escribir algo parecido a XML con las ventajas de JS como variables y funciones, debajo del capo todo el JSX se traduce a React.createElement en JavaScript puro.

P﻿or eso es que se usa className en vez de class, ya que class es una palabra reservada en JavaScript y tira error al usarla.

## Unidirectional Data Flow

Básicamente es una forma de decir que la modificación del DOM no modifica los valores del State de la applicacion. Si uno tiene un input cuyo valor es un state, para modificar el state hay que llamar al set state expresamente, y si no se hace la modificacion del Dom no se refleja en el state. La direccion de la informacion es simpre del state al dom  no al reves.

```jsx
import React from "react";

export default function App (){
   const [valor, setValor] = useState("");
  
  function handleChange(e){
    // si aca no se ahce cambio en el state
    // por mas que apretemos 1000 veces cualquier letra en
    // el input no va a cambiar 
  }
  
  return (<input value={valor} onChange={handleChange} /> );
}
```

## Virtual Dom

E﻿l DOM (Document Object Model) es la representacion de todos los elementos HTML de la pagina web que hace el browser, el Virtual DOM es una copia de es te que React maneja, los cambios desde código se hacen en esa copia, y en el momento del render se comparan ambos y solo se renderizan donde  realmente haya cambios para lograr una mejor eficiencia al renderizar.

## H﻿igh Order Components (HOC)

U﻿n HOC es basicamente un componente que recibe otro y le agrega funcionalidad, metodos y/o estados que pueden ser comunes a varios estados y por eso se sacan a un componente propio. Es el equivalente a un mixin en otros lenguajes y frameworks. La convencion es que empiecen con with, como por ejemplo withRouter.

```jsx
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
```

## H﻿ooks

## C﻿ontexts

### Prop drilling

U﻿no de los probleas tipicos que nos encontramos al progamar en react es que pasa si tengo un estado que necesito en un componente que no directamente hijo del componente donde se define ese estado, y el nieto o bisnieto del mismo, para poder pasarle el estado debo pasarlo como prop a  mi hijo y este a su hijo hasta llegar al componente donde se si necestita, declrando pprop innecesarias para los componentes que no necestian el dato, este problema es conocido como prop drilling, es decir tenemos que taladrar componentes hasta llegar al componente que si usa el dato. 

U﻿na de las formas de solucionar este problema y poder compartir estados con componentes que no estamos usando directamente son los contextos, en el siguiente ejemplo muy exagerado hay 5 niveles de componentes y al usar el contexto nos ahorramos de declarar las props para todos los intermedios que no usan ese dato, usando el hook useContext.

```jsx
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext(); //se crea el contexto 

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}> // se define el proveedor de la informacion
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext); //se define que se va a usar del contexto.

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
```

## L﻿ife cycle method with hooks

Antes de la programación funcional cuando los componentes eran declarados con clases teniamos metodos accesibles durente la vida del componente cuando estaba listo (montado) cuando iba a ser actualizdo, cuando fue actualizado y cuando iba a ser borrado. Solo nos vamos a enfocar en componentDidMount, componentDidUpdate  y componentWillUnmount [ya que los otros van a ser deprecados](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)

### componentDidMount

```jsx
import React from "react";
 //antes 
class Component extends React.Component {
  componentDidMount() {
    console.log("Componente en el DOM");
  }
  render() {
    return <h1>Hola mundo</h1>;
  }
};
//ahora 
import React, { useEffect } from "react";
  const Component = () => {
  useEffect(() => {
    console.log("Componente en el DOM");
  }, []); // Es clave este array vacio par solo se ejecute en la creacion.
  return <h1>Hello World</h1>;
};
```

### componentDidUpdate

```jsx
//Antes
import React from "react";
 
class Component extends React.Component {
  componentDidUpdate() {
    console.log("El componente a recibir un nuevo state o props.");
  }
 
  render() {
    return <h1>Hola mundo</h1>;
  }
};
//Ahora 
import React, { useEffect } from "react";
 
const Component = () => {
  useEffect(() => {
    console.log("El componente a recibir un nuevo state o props.");
  }); // a diferencia del anterior no tiene el array vacio
      // se va a ejecutar en cada render.
 
  return <h1>Hola mundo</h1>;
};
```

### componentWillUnmount

```jsx
//Antes
import React from "react";
 
class Component extends React.Component {
  componentWillUnmount() {
    console.log("Justo antes de sacarlo del DOM.");
  }

  render() {
    return <h1>Hola mundo</h1>;
  }
};
//Ahora
import React, { useEffect } from "react";
 
const Component = () => {
  useEffect(() => {
    // Este return solo se ejecutara 
    // al final de la vida del componente
    return () => { 
      console.log("Justo antes de sacarlo del DOM.");
    }
  }, []);
 
  return <h1>Hola Mundo</h1>;
};
```