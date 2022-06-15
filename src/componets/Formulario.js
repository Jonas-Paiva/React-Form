import { useState } from 'react';
import './Componets.css';
import Card from './Card.js';

function Form() {

	function Enviar(e){
		e.preventDefault();
		
	}

	return(
		<div className='.box-forms'>
			<h1>Cadastro de Usuário</h1>
			<form>
				<input type='text' placeholder='Digite o seu nome ...'/>
				<input type='password' placeholder='Digite a sua senha ...'/>
				<button type='submit' onClick={Enviar}>Enviar</button>
			</form>
		</div>
	);

};

export default Form;
