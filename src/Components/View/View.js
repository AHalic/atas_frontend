import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import {AiOutlineCalendar} from 'react-icons/ai';
import api from "../../services/api";
import '../Home/style.css';
import '../Form/style.css';
import './style.css';
import { Link, useParams } from 'react-router-dom';


export default function Form() {
	const [dateStart, setDateStart] = useState(new Date());
	const [dateEnd, setDateEnd] = useState(undefined);
	const [selectedLocal, setSelectedLocal] = useState(0);
	const [selectedTipoReuniao, setSelectedTipoReuniao] = useState(0);
	const [selectedTitle, setSelectedTitle] = useState('');
	const [selectedDescription, setSelectedDescription] = useState([]);


    const { id } = useParams();


    useEffect(() => {
        api
            .get(`/api/Atas/${id}`)
            .then(response => {
                setSelectedLocal(response.data.local);
                setSelectedTipoReuniao(response.data.tipoReuniao);
                setSelectedTitle(response.data.titulo);
                setSelectedDescription(response.data.camposAtaReuniao);
                setDateStart(new Date(response.data.dataInicio));
                setDateEnd(response.data.dataFim);
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
						<p id="atas-text-1">Dados da Ata</p>
					</div>
				</div>
				<div className="aux"></div>
			</div>

			{/* List of Atas */}
			<div className="container-atas"> 
				<div className="aux"></div>

					<div className="container-saved-atas">
						<p className="label-forms">
							Identificação
						</p>

						<div className="container-inputs">
							{/* Titulo da reunião input */}
							<div className="relative">
                                <label htmlFor="titulo" className="font-sans pl-2 text-sm text-custom-dark-gray">Título</label>
                                <p id="titulo" className="info-ata-view">
                                    {selectedTitle}
                                </p>
							</div>
							
							{/* Local Picker */}
							<div className="relative">
                                <label htmlFor="localReuniao" className="font-sans pl-2 text-sm text-custom-dark-gray">Local</label>
                                <p id="localReuniao" className="info-ata-view">
                                    {selectedLocal}
                                </p>
							</div>
							
							{/* Data e Hora Picker */}
							<div className="calendars-input justify-between">
								{/* <div className="date-test calendar relative"> */}
                                    <div className="relative w-full mr-2">
                                        <label htmlFor="dateStart" className="font-sans pl-2 text-sm text-custom-dark-gray">Data e Horário de Início</label>
                                        <p id="dateStart" className="info-ata-view">
                                            {dateStart.toLocaleString()}
                                            {/* <AiOutlineCalendar className="text-custom-dark-gray image-size"/> */}
                                        </p>
                                    </div>

                                    <div className="relative w-full ml-2">
                                        <label htmlFor="dateEnd" className="font-sans pl-2 text-sm text-custom-dark-gray">Data e Horário de Fim</label>
                                        <p id="dateEnd" className="info-ata-view">
                                            {dateEnd && dateEnd.toLocaleString() !== '0001-01-01T00:00:00' ? new Date(dateEnd).toLocaleString() : 'Sem data definida'}
                                            {/* <AiOutlineCalendar className="text-custom-dark-gray image-size"/> */}
                                        </p>
                                    </div>
							</div>
							
							{/* Tipo de reunião Picker */}
							<div className="relative">
                                <label htmlFor="typeReuniao" className="font-sans pl-2 text-sm text-custom-dark-gray">Tipo de Reunião</label>
                                <p id="typeReuniao" className="info-ata-view">
                                    {selectedTipoReuniao}
                                </p>
							</div>
						</div>

						<p className="label-forms">
							Conteúdo da Reunião
						</p>

						<div className="meeting-content">
                            {selectedDescription.map((item) => (
                                <div key={`${item.campoId}`} className="relative">
                                    <label htmlFor={`${item.campoId}`} className="font-sans pl-2 text-sm text-custom-dark-gray">{item.nome}</label>
                                    <p id={`${item.campoId}`} className="info-ata-view">
                                        {item.tipo !== 'datetime' ? item.valor : new Date(item.valor).toLocaleString()}
                                    </p>
                                </div>
                            ))}
						</div>

						<div className="buttons-forms">
							<Link to="/">
								<button type="button" className="buttons button-cancel">
									VOLTAR
								</button>
							</Link>
						</div>
					</div>

				<div className="aux"></div>
			</div>
			
		</div>
	);
}
