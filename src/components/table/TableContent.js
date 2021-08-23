import React from "react";
import TableHeader from "./TableHeader"
import TableData from "./TableData"
import {movieData} from "../../config/data"

function Table (){

    return (

<table>
      <TableHeader />
        
        {
            movieData.map(movie =>{
               return( <TableData 
                    titulo= {movie.titulo}
                    duracion= {movie.duracion}
                    rating= {movie.rating}
                    genero= {movie.genero}
                    premios= {movie.premios}
                
                />)
            })
        }

      <TableHeader />

    
  


</table>
    )
}


export default Table;