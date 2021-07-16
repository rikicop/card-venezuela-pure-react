/* import moment from 'moment'; */
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css'


function Avatar({ hash }) {
 
  const url = `https://w7.pngwing.com/pngs/576/867/${hash}`;
  return (
    <img src={url}
      className="avatar"
      alt="avatar" />
  )
}
Avatar.propTypes = {
  hash: PropTypes.string
};

function Bank({ bank }) {
  const { name, tipo } = bank
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="compa">,{tipo}</span>
    </span>
  )
}

Bank.propTypes = {
  bank: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
  }).isRequired
};

function Codigo({ txt }) {
  return (
    <div className="codigo">
      {txt}
    </div>
  )
}

Codigo.propTypes = {
  txt: PropTypes.string
};

function Mcodigo({ txt }) {
  return (
    <div className="mcodigo">
      {txt}
    </div>
  )
}

Mcodigo.propTypes = {
  txt: PropTypes.string
};

function Valid({ txt }) {
  return (
    <div className="valid">
      VALID<br/>THRU
    </div>
  )
}

Valid.propTypes = {
  txt: PropTypes.string
};




function Fecha({ txt }) {
  return (
    <div className="fecha">
      {txt}
    </div>
  )
}

Fecha.propTypes = {
  txt: PropTypes.string
};

function Nombre({ txt }) {
  return (
    <div className="nombre">
      {txt}
    </div>
  )
}

Nombre.propTypes = {
  txt: PropTypes.string
};


function Tarjeta({ tarjeta }) {
  const {gravatar,bank,codigo,mcodigo,fecha,nombre}=tarjeta
  return (

    <div className="container">
      <Avatar hash={gravatar} />
      <div className="content">
        <Bank bank={bank} />
        <Codigo txt={codigo}/>
        <Mcodigo txt={mcodigo} />
        <Valid/><Fecha txt={fecha}/>
        <Nombre txt={nombre}/>
      </div>
    </div>

  );
}

/* Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    likes:PropTypes.number.isRequired,
    retweets:PropTypes.number.isRequired,
    timestamp:PropTypes.string.isRequired

  }).isRequired
}; */


const testTarjeta = {
  gravatar: "png-transparent-bank-customer-service-brand-banco-de-venezuela-bank-angle-text-rectangle-thumbnail.png",
  bank: { tipo: "S.A", name: "Banco de Venezuela" },
  codigo: "1234  5678  8765  4321",
  mcodigo: "1234",
  fecha:"08/22",
  nombre:"RICARDO OTALORA LUNA"
 
};


ReactDOM.render(<Tarjeta tarjeta={testTarjeta} />, document.querySelector('#root'));