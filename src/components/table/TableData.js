import React from "react"

function TableData (props){
return (
    <tr>
        <td>{props.titulo}</td>
        <td>{props.duracion}</td>
        <td>{props.rating}</td>
        <td>
        <ul>
            {
                props.genero.map(genero =>{
                    return (
                            <li>{genero}</li>
                    )
                })   
            }
         </ul>
            </td>
        <td>{props.premios}</td>
    </tr>
)
}

export default TableData

