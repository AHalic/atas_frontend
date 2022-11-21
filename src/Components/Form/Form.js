import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";

import api from "../../services/api";
import '../Home/style.css';
import './style.css';


export default function Form() {
	const [local, setLocal] = useState([{}]);
	const [tiposReuniao, setTiposReuniao] = useState([{}]);
	const [dateStart, setDateStart] = useState(new Date());
	const [dateEnd, setDateEnd] = useState(new Date());

	// Get Locais from API
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

	// Get TiposReuniao from API
	useEffect(() => {
		api
			.get("/api/TiposReuniao")
			.then(response => {
				setTiposReuniao(response.data);
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);

	function handleDateStartChange(e) {
		setDateStart(e.target.value);
	}

	function handleDateEndChange(e) {
		setDateEnd(e.target.value);
	}

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
							{/* Titulo da reunião input */}
							<div className="relative">
								<input required type="text" id="floating_outlined_title" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" placeholder=" " />
								<label htmlFor="floating_outlined_title" className="font-sans absolute text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Título *</label>
							</div>
							
							{/* Local Picker */}
							<div className="relative">
								<select defaultValue={"default"} required id="floating_outlined_local" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" placeholder=" ">
									<option value="default" hidden disabled>Escolha um local</option>
									{local.map((local) => (
										<option key={`${local.id}`} value={local.id}>{local.nome}</option>
									))}
								</select>
								<label htmlFor="floating_outlined_local" className="font-sans absolute text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Local *</label>
							</div>
							
							{/* Data e Hora Picker */}
							<div className="calendars-input">
								<div className="date-test">
									<input required onChange={handleDateStartChange} type="datetime-local" id="floating_outlined_start" className="flex text-sm w-4/5 text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" value="" />
									<label htmlFor="floating_outlined_start" className="font-sans absolute text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">Data e Horário de Início *</label>
								</div>

								<div className="date-test relative">
									<input onChange={handleDateEndChange} type="datetime-local" id="floating_outlined_end" className="absolute right-1 text-sm w-4/5 text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" value="" />
									<label htmlFor="floating_outlined_end" className="font-sans absolute right-1 left-1/4 text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">Data e Horário de Fim</label>
								</div>
							</div>
							
							{/* Tipo de reunião Picker */}
							<div className="relative">
								<select defaultValue={"default"} required id="floating_outlined_tipos" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-custom-dark-gray bg-transparent rounded-lg border-1 border-custom-light-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-custom-light-blue focus:outline-none focus:ring-0 focus:border-custom-light-blue peer" placeholder=" ">
									<option value="default" hidden disabled>Escolha um tipo de reunião</option>
									{tiposReuniao.map((tipos) => (
										<option key={`${tipos.id}`} value={tipos.id}>{tipos.nome}</option>
									))}
								</select>
								<label htmlFor="floating_outlined_tipos" className="font-sans absolute text-sm text-custom-dark-gray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-custom-light-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-custom-light-blue peer-focus:dark:text-custom-light-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Tipo de Reunião *</label>
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
