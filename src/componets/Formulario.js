import { useState } from 'react';
import './Formulario.modulo.css';

function Form() {

	function cadastrarUsuario(e) {
		e.preventDefault();
		console.log(`Usuário ${name} Senha ${password}`);
	}

	const [name, setName] = useState('');
	const [password, setPassaword] = useState('');

	return (
		<div className='box-forms'>
			<h2>Cadastrar Usuário</h2>
			<form onSubmit={cadastrarUsuario}>
				<input
					type="text"
					name="name"
					value={name}
					placeholder="Digite seu nome..."
					onChange={(e) => setName(e.target.value)}
				/>
                
                <br/>

				<input
					type="password"
					name="password"
					value={password}
					placeholder="Digite sua senha..."
					onChange={(e) => setPassaword(e.target.value)}
				/>

                <br/>

				<input id='button' type="submit"/>
			</form>
		</div>
	);
}

export default Form;
