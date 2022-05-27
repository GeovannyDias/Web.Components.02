# Web Component - CSS Custom Properties Penetrate the Shadow DOM

## CUSTOM PROPERTIES (Example)

```
--bg-card: #ffe433;
--padding-card: 35px;
--border-radius: 10px;
--color-card: #ffffff;
--box-shadow: 10px 10px 1px -1px rgba(0, 0, 0, 1), 15px 20px 1px 0px rgba(0, 0, 0, 0.14);

app-card {
    --bg-card: #ffe433;
    --padding-card: 35px;
}

*.js

box-shadow: var(--box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12));


```
## Usando shadow DOM
* **https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM**

```
Algunos conceptos de Shadow DOM:

Shadow host: El nodo regular del DOM al que es atado el shadow DOM.
Shadow tree: El arbol DOM dentro del shadow DOM.
Shadow boundary: El punto en el que el shadow DOM termina y el DOM regular comienza.
Shadow root: El nodo raiz del arbol Shadow.

```

## Cascada y herencia

* **https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance**

```
Control de la herencia:

inherit: "Activa la herencia".

initial: Establece el valor de la propiedad que este establecido en la hoja de estilo por defecto del navegador.

unset (en-US): Restablece la propiedad a su valor natural, lo que significa que si la propiedad se hereda de forma natural, actúa como inherit, y en caso contrario como initial.

Comprender la cascada:

Orden en el código
Especificidad [1000 (style), 0100(ID), Class(0010), 0001(elemento html)]
Importancia


Propiedad !important: una declaración con "!important", significa que dicha declaración tendra mayor valor (especificidad), aunque el selector ID de esta tenga mayor especificidad.

```

## Shadow DOM v1 - Self-Contained Web Components
* **https://web.dev/shadowdom-v1/**

```
Shadow DOM allows web developers to create compartmentalized DOM and CSS for web components
```

## Usar componentes StencilJS desde Angular
* **http://blog.enriqueoriol.com/2017/10/stenciljs-desde-angular.html**

```
Copia la carpeta "www" o su contendio de tu proyecto stencil a la carpeta "assets" de tu proyecto angular:
src/assets/dsw-stencil-components

En el fichero index.html, dentro de la etiqueta header colocamos la CDN o ruta de los siguientes ficheros *.css y *.js

<link rel="stylesheet" href="assets/dsw-stencil-components/build/app.css" />
<script src="assets/dsw-stencil-components/build/app.esm.js" type="module"></script>

```
