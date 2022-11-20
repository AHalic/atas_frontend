import React, { useEffect, useState } from "react";
import Header from "../AppHeader/AppHeader";
import api from "../../services/api";


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
		<div className="App">
			<Header />
		</div>
	);
}
