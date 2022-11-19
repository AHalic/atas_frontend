import React, { useEffect, useState } from "react";
import api from "./services/api";


export default function Form() {
	const [local, setLocal] = useState([{}]);

	useEffect(() => {
		api
			.get("/api/Locais")
			.then(response => {
				setLocal(response.data)
				console.log(response.data)
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);
		
	console.log('local', local[0].nome)

	if (!local) {
		return <p>Carregando...</p>;
	}

	return (
		<div className="App">
			<select id="local">
				{local ? local.map((l) => (
					<option key={`${l.id}`} value={l.id}>{l.nome}</option>
				)) : <option key={'0'} value={0}>Sem local disponível</option>}
			</select>
		</div>
	);
}
