import React from "react";

import {cardData} from "../config/data"
import ContentRowMovies from "./ContentRowMovies"
import GenresInDb from "./GenresInDb"
import {Route} from "react-router-dom"
import LastMovieInDb from "./LastMovieInDb"




function ContentRowTop (){

    return (
       
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div className="row">

					<Route exact path="/ContentRowMovies">
				
				{
					cardData.map((card, index) =>{
						return (<ContentRowMovies
							titulo= {card.titulo}
							cifra= {card.cifra}
							icono= {card.icono}
							color= {card.color}
							textColor= {card.textColor}
							
							/>
						)
					})
				}
				</Route>
			</div>

					
				<Route path="/charts">
					<div className="row">
	
				<LastMovieInDb />
				<GenresInDb />
					</div>
					</Route>

				</div>
				
		
		
    )

}

export default ContentRowTop