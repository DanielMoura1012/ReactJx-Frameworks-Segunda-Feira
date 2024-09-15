// src/componentes/ListaDeCompras.jsx

 import React from 'react';

 const ListaDeCompras = () => {
   const itens = ['Maçãs', 'Bananas', 'Leite', 'Pão'];

   return (
     <div>
       <h2>Lista de Compras</h2>
       <ul>
         {itens.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
       </ul>
     </div>
   );
 };

 export default ListaDeCompras;
