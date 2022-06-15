import './Componets.css';

function Card(props){

	return(

		<div className="Card">

				<h1>Perfil</h1>
                <h2>{props.name}</h2>
                <h2>{props.password}</h2>

		</div>
	);
}

export default Card;