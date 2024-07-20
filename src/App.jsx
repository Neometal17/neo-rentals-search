import rental_json from "./assets/proporsal-rental.json"
import {v4 as uuidv4} from 'uuid';
import './App.css'
import { useState } from "react";


function App() {
  const DESCART_TYPE = "descartado";
  const REVISION_TYPE = "revision";
  const ENESPERA_TYPE = "enEspera";
  const AGENDADO_TYPE = "agendado";

  const [listDescart, setListDescart] = useState(
    rental_json.filter(item => item.check==DESCART_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td><a href={rental["direccion-google-maps"]}>Google Maps Link</a></td>
        <td>{rental.contacto}</td>
        <td>{rental.observacion}</td>
      </tr>)
  );

  const [listEnRevision, setlistEnRevision] = useState(
    rental_json.filter(item => item.check==REVISION_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td><a href={rental["direccion-google-maps"]}>Google Maps Link</a></td>
        <td>{rental.contacto}</td>
        <td>{rental.observacion}</td>
      </tr>)
  );

  const [listEnEspera, setlistEnEspera] = useState(
    rental_json.filter(item => item.check==ENESPERA_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td><a href={rental["direccion-google-maps"]}>Google Maps Link</a></td>
        <td>{rental.contacto}</td>
        <td>{rental.observacion}</td>
      </tr>)
  );

  const [data, setData] = useState(
    rental_json.filter(item => item.check==AGENDADO_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td><a href={rental["direccion-google-maps"]}>Google Maps Link</a></td>
        <td>{rental.contacto}</td>
        <td>{rental.observacion}</td>
      </tr>)
  )

  const [rentalSave, setRentalSave] = useState({});

  let rentals = [];

  function handleSave(){
    const temp = {
      "uuid": uuidv4(),
      "title": document.getElementsByName("titulo")[0].value,
      "link": document.getElementsByName("facebook")[0].value,
      "modalidad": document.getElementsByName("condicion")[0].value,
      "price": document.getElementsByName("precio")[0].value,
      "lugar": document.getElementsByName("lugar")[0].value,
      "cochera": document.getElementsByName("cochera")[0].value,
      "check": document.getElementsByName("check")[0].value,
      "direccion": document.getElementsByName("direccion")[0].value,
      "direccion Google Maps": document.getElementsByName("direccion-google-maps")[0].value,
      "contacto": document.getElementsByName("contacto")[0].value,
      "observacion": document.getElementsByName("observacion")[0].value
    }
    setRentalSave(temp)
  }
  
  function handleClick(){
    const filterSearch = document.getElementsByName("filtro")[0].value;
    const optionColumn = parseInt(document.getElementById("opcion").value);
    console.log("Ejem: " + filterSearch + " - ejem2: " + optionColumn);

    let rentals_temp = [];

    switch(optionColumn){
      case 1:
        rentals_temp = rental_json.filter(item => item.title.includes(filterSearch.trim()))    
      break;
      case 2:
        rentals_temp = rental_json.filter(item => item.link.includes(filterSearch.trim()))    
      break;
      case 3:
        rentals_temp = rental_json.filter(item => item.modalidad.includes(filterSearch.trim()))    
      break;
      case 4:
        rentals_temp = rental_json.filter(item => item.price.includes(filterSearch.trim()))    
      break;
      case 5:
        rentals_temp = rental_json.filter(item => item.lugar.includes(filterSearch.trim()))    
      break;
      case 6:
        rentals_temp = rental_json.filter(item => item.cochera.includes(filterSearch.trim()))    
      break;
      case 7:
        rentals_temp = rental_json.filter(item => item.check.includes(filterSearch.trim()))    
      break;
      case 8:
        rentals_temp = rental_json.filter(item => item.direccion.includes(filterSearch.trim()))    
      break;
      case 9:
        rentals_temp = rental_json.filter(item => item.contacto.includes(filterSearch.trim()))    
      break;
      case 10:
        rentals_temp = rental_json.filter(item => item.observacion.includes(filterSearch.trim()))    
      break;
      case 11:
        rentals_temp = rental_json.filter(item => item.uuid.includes(filterSearch.trim()))    
      break;
      default:
        console.log('Unknown color');
    }

    rentals = rentals_temp.filter(item => item.check==AGENDADO_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td><a href={rental.direccion-google-maps}>Google Maps Link</a></td>
        <td>{rental.contacto}</td>
        <td>{rental.observacion}</td>
      </tr>);
    setData(rentals);

    setlistEnEspera(rentals_temp.filter(item => item.check==ENESPERA_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td>{rental.contacto}</td>
        <td><a href={rental.direccion-google-maps}>Google Maps Link</a></td>
        <td>{rental.observacion}</td>
      </tr>));

    setlistEnRevision(rentals_temp.filter(item => item.check==REVISION_TYPE).map(rental => 
      <tr>
        <td>{rental.uuid}</td>
        <td>{rental.title}</td>
        <td><a href={rental.link}>Facebook Link</a></td>
        <td>{rental.modalidad}</td>
        <td>{rental.price}</td>
        <td>{rental.lugar}</td>
        <td>{rental.cochera}</td>
        <td>{rental.check}</td>
        <td>{rental.direccion}</td>
        <td><a href={rental.direccion-google-maps}>Google Maps Link</a></td>
        <td>{rental.contacto}</td>
        <td>{rental.observacion}</td>
      </tr>));

      setListDescart(rentals_temp.filter(item => item.check==DESCART_TYPE).map(rental => 
        <tr>
          <td>{rental.uuid}</td>
          <td>{rental.title}</td>
          <td><a href={rental.link}>Facebook Link</a></td>
          <td>{rental.modalidad}</td>
          <td>{rental.price}</td>
          <td>{rental.lugar}</td>
          <td>{rental.cochera}</td>
          <td>{rental.check}</td>
          <td>{rental.direccion}</td>
          <td><a href={rental.direccion-google-maps}>Google Maps Link</a></td>
          <td>{rental.contacto}</td>
          <td>{rental.observacion}</td>
        </tr>));
  }

  return (
    <>
      <div>
        <table>
          <tr>
            <td>Titulo: </td><td><input name="titulo"/></td>
            <td>Facebook: </td><td><input name="facebook"/></td>
          </tr>
          <tr>
            <td>Condicion: </td><td><input name="condicion"/></td>
            <td>Precio: </td><td><input name="precio"/></td>
          </tr>
          <tr>
            <td>Lugar: </td><td><input name="lugar"/></td>
            <td>Cochera: </td><td><input name="cochera" defaultValue="no"/></td>
          </tr>
          <tr>
            <td>Check: </td><td><input name="check" defaultValue="revision"/></td>
            <td>Direccion: </td><td><input name="direccion"/></td>
            <td>Direccion Google Maps: </td><td><input name="direccion-google-maps"/></td>
          </tr>
          <tr>
            <td>Contacto: </td><td><input name="contacto"/></td>
            <td>Observacion: </td><td><input name="observacion"/></td>
          </tr>
          <tr>
            <td colSpan={2} width={400}>{JSON.stringify(rentalSave)}</td>
            <td colSpan={2}><button onClick={handleSave}>Guardar</button></td>
          </tr>
        </table>
      </div>
      <div>
        <label>Filtrar: </label>
        <input name="filtro"></input>
        <select id="opcion">
          <option value={1}>Titulo</option>
          <option value={2}>Facebook</option>
          <option value={3}>Condicion</option>
          <option value={4}>Precio</option>
          <option value={5}>Lugar</option>
          <option value={6}>Cochera</option>
          <option value={7}>Check</option>
          <option value={8}>Direccion</option>
          <option value={9}>Contacto</option>
          <option value={10}>Observaciones</option>
          <option value={11}>Uuid</option>
        </select>
        <button onClick={handleClick}>Buscar</button>
      </div>
      <div><h2>Visita Agendada</h2></div>
      <table border={1} width={1200}>
        <tr>
          <td>Uuid</td>
          <td>Titulo</td>
          <td>Facebook</td>
          <td>Condicion</td>
          <td>Precio</td>
          <td>Lugar</td>
          <td>Cochera</td>
          <td>Check</td>
          <td>Direccion</td>
          <td>Direccion Google Maps</td>
          <td>Contacto</td>
          <td>Observaciones</td>
        </tr>
        {data}
      </table>

      <div><h2>En Revisiones</h2></div>
      <table border={1} width={1200}>
        <tr>
          <td>Uuid</td>
          <td>Titulo</td>
          <td>Facebook</td>
          <td>Condicion</td>
          <td>Precio</td>
          <td>Lugar</td>
          <td>Cochera</td>
          <td>Check</td>
          <td>Direccion</td>
          <td>Direccion Google Maps</td>
          <td>Contacto</td>
          <td>Observaciones</td>
        </tr>
        {listEnRevision}
      </table>

      <div><h2>En Espera</h2></div>
      <table border={1} width={1200}>
        <tr>
          <td>Uuid</td>
          <td>Titulo</td>
          <td>Facebook</td>
          <td>Condicion</td>
          <td>Precio</td>
          <td>Lugar</td>
          <td>Cochera</td>
          <td>Check</td>
          <td>Direccion</td>
          <td>Direccion Google Maps</td>
          <td>Contacto</td>
          <td>Observaciones</td>
        </tr>
        {listEnEspera}
      </table>

      <div><h2>Descartada</h2></div>
      <table border={1} width={1200}>
        <tr>
          <td>Uuid</td>
          <td>Titulo</td>
          <td>Facebook</td>
          <td>Condicion</td>
          <td>Precio</td>
          <td>Lugar</td>
          <td>Cochera</td>
          <td>Check</td>
          <td>Direccion</td>
          <td>Direccion Google Maps</td>
          <td>Contacto</td>
          <td>Observaciones</td>
        </tr>
        {listDescart}
      </table>
    </>
  )
}

export default App
