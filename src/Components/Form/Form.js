import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import api from "../../services/api";
import '../Home/style.css';
import './style.css';


export default function Form() {
	const [local, setLocal] = useState([{}]);

	useEffect(() => {
		api
			.get("/api/Locais")
			.then(response => {
				setLocal(response.data)
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);


	return (
		<div className="Form">
			<Header />

			{/* Text and new ata button */}
			<div className="container-atas">
				<div className="aux"></div>
				<div className="container-atas-content">
					<div className="container-texts">
						<p id="atas-text-1">Nova Ata de Reunião</p>
						<p id="atas-text-2">Os campos obrigatórios estão marcados com um asterisco (*)</p>
					</div>
				</div>
				<div className="aux"></div>
			</div>

			{/* List of Atas */}
			<div className="container-atas"> 
				<div className="aux"></div>

				<div className="container-saved-atas">

				</div>

				<div className="aux"></div>
			</div>
			
		</div>
	);
}
