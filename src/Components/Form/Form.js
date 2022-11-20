import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import api from "../../services/api";
import '../Home/style.css';
import './style.css';


export default function Form() {
	const [local, setLocal] = useState([{}]);
	const [tipoReuniao, setTipoReuniao] = useState([{}]);
	var optionsState;

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

				<form>
					<div className="container-saved-atas">
						<p className="label-forms">
							Identificação
						</p>
						<div className="container-inputs">
							<div className="relative">
								<input required type="text" id="floating_outlined_title" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" placeholder=" " />
								<label htmlFor="floating_outlined_title" className="font-sans absolute text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Título *</label>
							</div>
							
							<div className="relative">
								<select defaultValue={"default"} required onChange={(event) => {console.log(event.target)}} id="floating_outlined_local" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" placeholder=" ">
									<option value="default" hidden disabled>Escolha um local</option>
									{local.map((local) => (
										<option key={`${local.id}`} value={local.id}>{local.nome}</option>
									))}
								</select>
								<label htmlFor="floating_outlined_local" className="font-sans absolute text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Local *</label>
							</div>


						</div>

						<p className="label-forms">
							Conteúdo da Reunião
						</p>
					</div>
				</form>

				<div className="aux"></div>
			</div>
			
		</div>
	);
}
