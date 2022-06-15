import { useState } from 'react';
import './Formulario.css';
import Card from './Card.js';

function Form() {

	function Enviar(e){
		e.preventDefault();
		
	}

	return(
		<div className='box-forms'>
			<h2>Cadastro de Usuário</h2>
			<form>
				<input className='caixa' type='text' placeholder='Digite o seu nome ...'/>

				<input className='caixa' type='password' placeholder='Digite a sua senha ...'/>

				<button id='button' type='submit' onClick={Enviar}>Enviar</button>
			</form>
		</div>
	);

};

export default Form;
