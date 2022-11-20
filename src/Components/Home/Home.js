import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import './style.css';
import api from "../../services/api";
import {AiOutlineEye} from 'react-icons/ai';
import {BiTrashAlt} from 'react-icons/bi';
import { Link } from 'react-router-dom';


export default function Home() {
	const [atas, setAtas] = useState([{}]);
	const [locais, setLocais] = useState([{}]);
	const [tiposReuniao, setTiposReuniao] = useState([{}]);
	const [unique, setUnique] = useState([]);

	// Get Atas from API
	// Sort atas by date and tipoReuniao
	useEffect(() => {
		api
			.get("/api/Atas")
			.then(response => {
				const sortedAtas = response.data.sort((a, b) => {
					return a.tipoReuniao > b.tipoReuniao && new Date(b.dataInicio) - new Date(a.dataInicio);
				});
		
				setAtas(sortedAtas);

				setUnique([...new Set(sortedAtas.map(item => item.tipoReuniao))]); // get unique groups

			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
		

	}, []);

	// Get Locais from API
	useEffect(() => {
		api
			.get("/api/Locais")
			.then(response => {
				setLocais(response.data)
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);

	// Get TiposReuniao from API
	// Sort tiposReuniao by name
	useEffect(() => {
		api
			.get("/api/TiposReuniao")
			.then(response => {
				const sortedTipos = response.data.sort((a, b) => {
					return a.nome < b.nome;
				});
		
				setTiposReuniao(sortedTipos);
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);

	async function deleteAta(id) {
		api
			.delete(`/api/Atas/${id}`)
			.then(response => {
				setAtas(atas.filter(ata => ata.id !== id));
				const atas_aux = atas.filter(ata => ata.id !== id);
				setUnique([...new Set(atas_aux.map(item => item.tipoReuniao))]); // get unique groups
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}
		

	return (
		<div className="Home">
			<Header></Header>

			{/* Text and new ata button */}
			<div className="container-atas">
				<div className="aux"></div>

				<div className="container-atas-content">
					<div className="container-texts">
						<p id="atas-text-1">Atas de Reunião</p>
						<p id="atas-text-2">Estas são as atas das últimas reuniões</p>
					</div>

					<div className="button-link-new">
						<Link to="/nova-ata">
							<button className="new-ata-button bg-custom-light-blue" type="button">
								+ NOVA ATA
							</button>
						</Link>
					</div>
				</div>
				<div className="aux"></div>
			</div>

			{/* List of Atas */}
			<div className="container-atas"> 
				<div className="aux"></div>

				<div className="container-saved-atas">
					{unique && unique.length > 0 && tiposReuniao && atas ? unique.map((item) => {
						// only show type if there are atas of that type
						return	<div className="title-sec-atas" key={tiposReuniao.find(i => i.nome === item).id}>
									<p className="title-sec">{item}</p>
									{atas.filter((ata) => ata.tipoReuniao === item).map((ata, index) => (
										<div className="outer-ata-container" key={ata.id}>
											<div className="inner-ata-container" key={`${ata.id}`}>
												<div className="ata" key={`${ata.id}`}>
													<p className="title-ata">{ata.titulo}</p>
													<p className="info-ata">{new Date(ata.dataInicio).toLocaleString('pt-BR')}, na {ata.local}</p>
												</div>

												<div className="ata-buttons">
													<AiOutlineEye/>
													<button className="handle-ata-button" type="button" onClick={() => deleteAta(ata.id)}>
														<BiTrashAlt size={16}/>
													</button>
												</div>

											</div>
											{index !== atas.filter((ata) => ata.tipoReuniao === item).length - 1 ? <hr/> : null}
										</div>
									))}
								</div>;
					}) :  
						// if there are no atas saved
						<div className="title-sec-atas" key={0}>
							<p className="title-sec">Sem atas salvas</p>
						</div>
					}
				</div>

				<div className="aux"></div>
			</div>
			
			
		</div>
	);
}
