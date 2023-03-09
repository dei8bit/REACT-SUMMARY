//#REACT Y REACT DOM:
// import React from "react";
// import ReactDOM from "react-dom/client";

//# RENDERIZACION:
//+Mostrando que es lo que pasa en la renderizacion:
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);
// console.log(root.render);

//. Renderizacion de componentes:

//_ Renderizando un elemento
// root.render(<h1>hello world</h1>);

//_ Renderizando un componente:
// function Saludo(){return (<h1>Hola Mundo</h1>)}
// root.render(Saludo());

//_ Renderizando un componente multiples veces:
// function Saludo(){return (<h1>Hola Mundo</h1>)}
//
// // //$ Sintaxis 1:
// root.render(
//   <div>
//       {Saludo()}
//       {Saludo()}
//       {Saludo()}
//   </div>
//   );

// //$ Sintaxis 2:
// //- Escribiendo compoenntes como objetos
// root.render(
//   <>
//       {Saludo()}
//       {Saludo()}
//       {Saludo()}
//   </>
//   );

// //$ Sintaxis 3:
// //- Usando sintaxis de JSX
// root.render(
//   <>
//     <Saludo></Saludo>
//     <Saludo></Saludo>
//   </>
//   );

// //$ Sintaxis 4:
// //- Usando "self closing tags"
// root.render(
//   <>
//     <Saludo/>
//     <Saludo/>
//     <Saludo/>
//   </>
//   );

//_ Renderizando varios componentes:

//$ Ejemplo 1:
// function Noticia() {
//   return (
//     <div>
//       <h1>Titulo de la noticia</h1>
//       <h3>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vero
//         soluta est praesentium incidunt qui.
//       </h3>
//     </div>
//   );
// }
// function Comentario() {return <p>Soy un comentario generico que no tiene sentido</p>}

// root.render(
//   <>
//     <Noticia/>
//     <Comentario/>
//   </>
// );

//$ Ejemplo 2:
// function Noticia() {
//   return (
//     <div>
//       <h1>Titulo de la noticia</h1>
//       <h3>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vero
//         soluta est praesentium incidunt qui.
//       </h3>
//     </div>
//   );
// }
// function Comentario() {return <p>Soy un comentario generico que no tiene sentido</p>}

// function Articulo() {
//   return(
//     <>
//       <Noticia/>
//       <Comentario/>
//     </>)}

// root.render(
//   <>
//     <Articulo/>
//     <Articulo/>
//     <Articulo/>
//   </>
// );

//# JavaScript en JSX:

//$ Ejemplo 1:
// function Suma() {return <>{2+2} </>}
// root.render(<Suma/>);

//$ Ejemplo 2:
// function Suma() {
//   return <>
//   <h1>{2 + 2}</h1>
//   </>;
// }
// root.render(<Suma/>);

//$ Ejemplo 3:
// const numero1= 30;
// const numero2= 22;
// function Sumas() {
//   return <>
//   <h1>suma 1:</h1><h2>{numero1+10}</h2>
//   <h1>suma 2:</h1><h2>{numero2*10}</h2>
//   </>;
// }
// root.render(<Sumas/>);

//. Condicionales:
//$ Ejemplo 1:

// function Autorizacion() {
//   // const pase = true;
//   const pase = false;
//   if (pase) {return <h1>Autorizacion efectiva </h1>}
//   else {return <h1>Acceso DENEGADO</h1>}
// }

// root.render(<Autorizacion/>)

//. funciones :
//$ Ejemplo 1:
// function Calculos(n1,n2) {
//   function suma(n1,n2) {return n1+n2}
//   function resta(n1,n2) {return n1-n2}
//   function multiplicacion(n1,n2) {return (n1*n2)}
//   function division(n1,n2) {return n1/n2}

//   return <>
//   <h1>{suma(2,2)}</h1>
//   <h1>{resta(5,4)}</h1>
//   <h1>{multiplicacion(10,77)}</h1>
//   <h1>{division(50,5)}</h1>
//   </>;
// }

// root.render(<Calculos/>);

//. Objetos:
//$ Ejemplo 1:

// function Persona() {
//   const persona = {
//     nombre: "Piter",
//     apellido: "Capochi",
//   };
//   return (
//     <>
//       <h1>{persona.nombre}</h1>
//       <h2>{persona.apellido}</h2>
//     </>
//   );
// }

// root.render(<Persona />);

//# Componentes Externos:

//_ Importacion por defecto:
/*

import Componente from "./componentesExternos";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Componente/>);
*/

//_ Importacion multiple:

/* import {
  ComponenteExterno1,
  ComponenteExterno2,
  ComponenteExterno3,
} from "./componentesExternos";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ComponenteExterno1 />
    <ComponenteExterno2 />
    <ComponenteExterno3 />
  </>
); */

//_ Importacion multiple nombrada:
/* import { Ce1, Ce2, Ce3 } from "./componentesExternos";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Ce1 />
    <Ce2 />
    <Ce3 />
  </>
); */

//# PROPS:
// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));

//. Explorando props:

//_ contenido de props:
// function Componente(props) {
//   console.log(props)
//   console.log(typeof props)
// }

// root.render(<Componente/>);

//_ Propiedades en props:
// function Componente(props) {console.log(props)};
// root.render(<Componente Propiedad1 = "valor1" PropiedadN = "valorN°"/>);

//, Props como objeto:

//$ Ejemplo 1:
//+ Una propiedad como argumento de props
// function Componente(props){return <h1>{props.titulo} </h1>}
// root.render(<Componente titulo= "TITULO CREADO A PARTIR DE UN  ARGUMENTO EN PROPS"/>);

//$ Ejemplo 2:
//+ Varias propiedades como argumentos de props
// function Componente(props) {
//   return (
//     <>
//       <h1>{props.titulo} </h1>
//       <h2>{props.subtitulo}</h2>
//       <p>{props.comentario} </p>
//     </>
//   );
// }
// root.render(
//   <Componente
//     titulo="TITULO a partir de Props"
//     subtitulo="subtitulo a partir de props"
//     comentario="Comentario a partir de props"
//   />
// );

//, Props con desestructuracion:

//$ Ejemplo 1:
//+ Una propiedad como argumento de props
// function Componente({titulo}){return <h1>{titulo} </h1>}
// root.render(<Componente titulo= "TITULO CREADO A PARTIR DE UN ARGUMENTO EN PROPS"/>);

//$ Ejemplo 2:
// //+ Varias propiedades como argumentos de props
// function Componente({titulo,subtitulo,comentario}) {
//   return (
//     <>
//       <h1>{titulo} </h1>
//       <h2>{subtitulo}</h2>
//       <p>{comentario} </p>
//     </>
//   );
// }

// root.render(
//   <Componente
//     titulo="TITULO a partir de Props"
//     subtitulo="subtitulo a partir de props"
//     comentario="Comentario a partir de props"
//   />
// );

//_ Usando valores por defecto:
// + La sintaxis de desestructuracion nos permite asignar valores por defecto.

//$ Ejemplo 1:
// function Componente({
//   titulo = "titulo generico",
//   subtitulo = "subtitulo generico",
//   comentario = "comentario generico",
// }) {
//   return (
//     <>
//       <h1>{titulo} </h1>
//       <h2>{subtitulo}</h2>
//       <p>{comentario} </p>
//     </>
//   );
// }

// root.render(<Componente />);

//$ Ejemplo 2:
/* 
function Componente({titulo ,subtitulo ,comentario}) {
  return (
    <>
      <h1>{titulo} </h1>
      <h2>{subtitulo}</h2>
      <p>{comentario} </p>
    </>
  );
}
Componente.defaultProps = {
  titulo: "titulo generico",
  subtitulo: "subtitulo generico",
  comentario: "comentario generico"
}

root.render(<Componente />); 
*/

//_ tipos de datos con props:
//+ Para trabajar con cualquier tipo de dato de JS simplemente usamos las llaves:
/* 

let variable;

function Componente({funcion, variable, boleano, objeto, arreglo, numero, texto }) {

  console.log(objeto);
  console.log(arreglo);
  console.log(funcion);
  console.log(numero);
  console.log(boleano);
  console.log(texto);
  console.log(variable);

  console.log(`"${objeto}" de tipo: ${typeof objeto}   `);
  console.log(`"${arreglo}" de tipo: ${typeof arreglo}  `);
  console.log(`"${funcion}" de tipo: ${typeof funcion} `);
  console.log(`"${numero}" de tipo: ${typeof numero}   `);
  console.log(`"${boleano}" de tipo: ${typeof boleano}  `);
  console.log(`"${texto}" de tipo: ${typeof texto}    `);
  console.log(`"${variable}" de tipo: ${typeof variable} `);
}

root.render(
  <Componente
    objeto={{ propiedad: "valor" }}
    arreglo={[888,"XYZ"]}
    funcion={()=>2+2}
    numero={101}
    boleano={true}
    texto={"holi"}
    variable={variable}
  />
);

*/

// _ props.childrén:
//+ Permite englobar un grupo de elementos o componentes dentro de otro componente ya definido.
/* 

function ComponenteDefinido(props) {
  return(
    <>
      <h1>h1 en  un componenten definido</h1>
        {props.children}
        <h1>h1 en  un componenten definido</h1>
    </>
    )
}

function OtroComponente() {
return( 
  <> 
    <ComponenteDefinido>
      <p>Soy un elemento contenido en un props children</p>
      <p>Al igual que yo</p>
    </ComponenteDefinido>
  </>
)}
root.render(<OtroComponente/>);

 */
//. RENDERIZACION CONDICIONAL:
// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));


//$ Ejemplo 1:
//- Devolviendo texto simple:

// const Activo = ({ user }) => (<div>{user ? "activo" : "no activo"}</div>);

// root.render(
//   <>
//   <Activo user={true} />
//   <Activo user={false} />
//   <Activo user={0} />
//   <Activo user={null} />
//   <Activo user={undefined} />
//   <Activo user={(1+1===3)} />
//   <Activo user={(1+1===2)} />
//   </>
// );

// //$ Ejemplo 2:
//- Devolviendo elementos

// const Activo = ({ user }) => ( <>{user ? <p>activo</p> : <h1>no activo</h1>}</>);

// root.render(
//   <>
//     <Activo user={true} />
//     <Activo user={false} />
//   </>
// );

// //$ Ejemplo 3:
//- Devolviendo componentes
// const Componente1 = () => <h1>ACTIVO</h1>;
// const Componente2 = () => <h1> NO ACTIVO</h1>;

// const Activo = ({ user }) =>(<>{user ? <Componente1 /> : <Componente2 />}</>)

// root.render(
//   <>
//     <Activo user={true} />
//     <Activo user={false} />
//   </>
// );

// //$ Ejemplo 4.1:
//- Retornando algo solo si se cumple una condicion.s
// const Componente1 = () => <h1>ALGO</h1>;

// const Condicion = ({ user }) => (<>{user && <Componente1 />}</>);

// root.render(
//   <>
//     <Condicion user={true} />
//     <Condicion user={false} />
//   </>
// );
// //$ Ejemplo 4.2:

// const Componente1 = () => <h1>ALGO</h1>;

// const Condicion = ({ user }) => {
//   if (user) {return <Componente1 />}

// };

// root.render(
//   <>
//     <Condicion user={true} />
//     <Condicion user={false} />
//   </>
// );

//. RENDERIZACION MULTIPLE:

//_ Iteracion:
// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));

//$ ejemplo 1:
//+ Una iteracion sin el valor key en cada elemento.
// const nombres = ["pedro","lucas","jorje"];

// function Lista({elementos}) {
//   const listaNombre = nombres.map((e) =>
//   <li>{e}</li>
// );
//   return(
//   <>
//     <ul>{listaNombre}</ul>
//   </>
// )}

// root.render(<Lista elementos={nombres} />);

//$ ejemplo 2:
//+ Una iteracion con el correspondiente el valor key en cada elemento.

// const nombres = ["carlos", "eustaquio", "pericles", "leonidas", "Baco"];

// function Lista({ elementos }) {
//   const listaNombre = nombres.map((e,index) => <li key={index}>{e}</li>);
//   return (
//     <>
//       <ul>{listaNombre}</ul>
//     </>
//   );
// }

// root.render(<Lista elementos={nombres} />);

//# EVENTOS:
// import React from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));

//$ Ejemplo 1:
// function Boton(){return<button onClick={function(){console.log("Clikeaste el boton");}}>CLICKEAME</button>}

//$ Ejemplo 2:
// function Boton(){return<button onClick={()=>{console.log("Clikeaste el boton");}}>CLICKEAME</button>}

//$ Ejemplo 3:
// const funcionTradicional = function(){console.log("Clikeaste el boton")};
// function Boton(){return<button onClick={funcionTradicional}>CLICKEAME</button>}
//$ Ejemplo 4:
// const funcionFlecha = ()=>{console.log("Clikeaste el boton")};
// function Boton(){return<button onClick={funcionFlecha}>CLICKEAME</button>}
// root.render(<Boton/>);

//. Parametros de Eventos:

//$ Ejemplo 1:
// function Boton(){return<button onClick={(info)=>console.log(info)}>BOTON</button>}
// root.render(<Boton/>);

//$ Ejemplo 2:
// function Boton(){return<input onChange={(info)=>console.log(info.target.value)}></input>}
// root.render(<Boton/>);

// #HOOKS:

//. useState:
//+ Permite manipular el estado de un componente a medida que este muta.

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));

//_ Analizando el contenido de useState:

//$ Ejemplo 1:
// function Estado() {
//   const estado  = useState();
//   console.log(estado);
// }
// root.render(<Estado/>);

//$ Ejemplo 2:
// function Estado() {
//   const estado  = useState("valor");
//   console.log(estado);
// }
// root.render(<Estado/>);

//$ Ejemplo 3:
// function Estado() {
//   const estado  = useState("valor",()=>{});
//   console.log(estado);
// }
// root.render(<Estado/>);

//$ Ejemplo 4:
// function Estado() {
//   const estado  = useState("valor",function funcionManejadora() {});
//   console.log(estado);
// }
// root.render(<Estado/>);

//$ Ejemplo 5:
// const manejador = function () {};

// function Estado() {
//   const estado  = useState("valor",manejador);
//   console.log(estado);
// }
// root.render(<Estado/>);

//_ Usando sintaxis de desestructuracion:

//$ Ejemplo 1:

// function Estado() {
//   const [estado] = useState(0);
//   return(
//     <>
//       <h1>{estado}</h1>
//       <h1>{estado+1}</h1>
//     </>
//     )
// }

// root.render(<Estado/>);

//$ Ejemplo 2:

// function Aumentador() {
//   const [estado, funcion] = useState(0);
//   return(
//     <>
//       <button onClick={()=>{funcion(estado+1)}}>AUMENTAR 1</button>
//       <button onClick={()=>{funcion(estado+5)}}>AUMENTAR 5</button>
//       <button onClick={()=>{funcion(estado+10)}}>AUMENTAR 10</button>
//       <h1>{estado}</h1>
//     </>
//     )
// }

// root.render(<Aumentador/>);
//$ Ejemplo 3:
//* Este ejemplo tiene un error intencional:
// function Aumentador() {
//   const [estado1, funcion1] = useState(0);
//   return(
//     <>
//       <button onClick={()=>{funcion1(estado1+1)}}>AUMENTAR 1</button>
//       <button onClick={()=>{funcion1(estado1+5)}}>AUMENTAR 5</button>
//       <button onClick={()=>{funcion1(estado1+10)}}>AUMENTAR 10</button>
//       <h1>{estado1}</h1>

//       <button onClick={()=>{funcion1(estado1-1)}}>Restar 1</button>
//       <button onClick={()=>{funcion1(estado1-5)}}>Restar 5</button>
//       <button onClick={()=>{funcion1(estado1-10)}}>Restar 10</button>
//       <h1>{estado1}</h1>
//     </>
//     )
// }
// root.render(<Aumentador/>);
// $ Ejemplo 4:
//* en este ejemplo se soluciona el  error previo
// function Aumentador() {
//   const [estado1, funcion1] = useState(0);
//   const [estado2, funcion2] = useState(0);
//   return(
//     <>
//       <button onClick={()=>{funcion1(estado1+1)}}>AUMENTAR 1</button>
//       <button onClick={()=>{funcion1(estado1+5)}}>AUMENTAR 5</button>
//       <button onClick={()=>{funcion1(estado1+10)}}>AUMENTAR 10</button>
//       <h1>{estado1}</h1>

//       <button onClick={()=>{funcion2(estado2-1)}}>Restar 1</button>
//       <button onClick={()=>{funcion2(estado2-5)}}>Restar 5</button>
//       <button onClick={()=>{funcion2(estado2-10)}}>Restar 10</button>
//       <h1>{estado2}</h1>
//     </>
//     )
// }
// root.render(<Aumentador/>);

//. useEffect:
//+ Permite identificar cambios de estado de un componente.

// import React, { useState , useEffect } from "react";
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
//$ Ejmemplo 1:
//+ useEffect para detectar cambios generales en el componente.

// function Cambios() {
//   const  [mensaje,setMensaje] = useState("nada");
//   const  [num,setNum] = useState(0);

//   useEffect(()=>{console.log("ha habido un cambio y me ejecute");},[])

//   return(
//     <>
//       <input onChange={e=>{setMensaje(e.target.value)}}/>
//       <h1>{mensaje}</h1>
//       <button onClick={()=>{setNum(num+1)}}></button>
//       <h1>{num}</h1>
//     </>)

// }

// root.render(<Cambios/>);

//$ Ejmemplo 2:
//+ useEffect para detectar cambios puntuales en el componente.
// function Cambios() {
//   const  [mensaje,setMensaje] = useState("nada");
//   const  [num,setNum] = useState(0);

//   useEffect(()=>{console.log("ha habido un cambio y me ejecute")},[num]);

//   return(
//     <>
//       <input onChange={e=>{setMensaje(e.target.value)}}/>
//       <h1>{mensaje}</h1>
//       <button onClick={()=>{setNum(num+1)}}>AUMENTAR</button>
//       <h1>{num}</h1>
//     </>)

// }

// root.render(<Cambios/>);

// #CONTEXTOS:

// import { createContext, useState } from "react";

// const Contexto = createContext();

// function Provaider(props) {
//   let x = 20;
// return(
//   <>
//     <Contexto.Provaider value={x}>
//       {props.children}
//     </Contexto.Provaider>

//   </>
// )}


//# Formularios:
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

//. Formularios controlados:
// + Se van validando en tiempo real a medida que se llena cada campo



//. Formularios  no controlados:
// + Son formularios manejados en el DOM, necesitan una referencia* y se validan despues de presionar El boton de envio.


//# React Router:
//+ Permite gestionar rutas en nuestra aplicacion



