import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import './style.css';
import api from "../../services/api";


export default function Home() {
	
	return (
		<div className="Home">
			<Header></Header>

			<div className="container-atas">
				<div className="aux"></div>
				<div className="container-texts">
					<p id="atas-text-1">Atas de Reunião</p>
					<p id="atas-text-2">Estas são as atas das últimas reuniões</p>
				</div>
				<button className="new-ata-button" type="button">
                    + NOVA ATA
                </button>
				<div className="aux"></div>
			</div>

			<div className="Content"> 
			{/* ONDE VAI TER TODAS AS ATAS */}
			</div>
			
			
		</div>
	);
}
