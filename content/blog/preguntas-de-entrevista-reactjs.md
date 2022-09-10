---
path: Preguntas de Entrevista ReactJs
date: 2022-09-10T19:18:59.794Z
title: Preguntas de Entrevista ReactJs
thumbnail: assets/react-logo_418x418.png
description: Preguntas comunes y conceptos de ReactJs para tener en cuenta en entrevistas.
tags:
  - web
---
## V﻿irtual Dom

E﻿l DOM (Document Object Model) es la representacion de todos los elementos HTML de la pagina web que hace el browser, el Virtual DOM es una copia de es te que React maneja, los cambios desde codigo se hacen en esa copia, y en el momento del render se comparan ambos y solo se renderizan donde  realmente haya cambios para lograr una mejor eficiencia al renderizar.

## H﻿igh Order Components (HOC)

U﻿n HOC es basicamente un componente que recibe otro y le agrega funcionalidad, metodos y/o estados que pueden ser comunes a varios estados y por eso se sacan a un componente propio. Es el equivalente a un mixin en otros lenguajes y frameworks. La convencion es que empiecen con with, como por ejemplo withRouter.\
\
<!--StartFragment-->

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

<!--EndFragment-->