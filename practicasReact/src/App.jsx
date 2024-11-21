import PropTypes from "prop-types"
import './App.css'



export const Saludo = ({nombre}) => {

  return (
    <>
      <h1>  Hola!, { nombre }</h1>
    </>
  );
}

Saludo.propTypes = {
  nombre: PropTypes.string
}