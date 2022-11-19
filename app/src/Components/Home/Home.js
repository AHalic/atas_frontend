import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import './style.css';
import api from "../../services/api";


export default function Home() {
	
	return (
		<div className="Home">
			<Header></Header>

			<div className="container-atas">
				<div className="container-texts">
					<text id="atas-text-1">Atas de Reunião</text>
					<text id="atas-text-2">Estas são as atas das últimas reuniões</text>
				</div>
			</div>

			<div className="Content"> 
			{/* ONDE VAI TER TODAS AS ATAS */}
			</div>
			
			
		</div>
	);
}
