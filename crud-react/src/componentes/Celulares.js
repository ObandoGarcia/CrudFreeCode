import "../css/Celulares.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Table, Button, Icon } from "semantic-ui-react";

export default function Celulares({ api }) {

  const [celulares, setCelularApiData] = useState([]);  

  //Listar los elementos en la tabla
  async function cargarCelulares() {
    try{ 
      axios.get(api).then((response) => {
      setCelularApiData(response.data);    
      })
    }catch(error){
      alert(error);
      console.error(error);
    }
  }

  //Cargar los elemnetos al almacenamiento local
  const setData = (data) => {
    let { celularId, marca, modelo, color, precio, descripcion, operadora} = data;
    localStorage.setItem("celId", celularId);
    localStorage.setItem("marca", marca);
    localStorage.setItem("modelo", modelo);
    localStorage.setItem("color", color);
    localStorage.setItem("precio", precio);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("operadora", operadora);
  }

  //Funcion de eliminar
  async function onDelete(id){
    try{
      let respuesta = await axios.delete(api + "?id=" + id);
      let data = await respuesta.data;

      if(data.status === 1){
        alert(data.message);
        cargarCelulares();
      }

    }catch(error){
      if(error.response.status === 404){
        alert("El registro que intentas eliminar ya no existe");
      }else{
        alert(error);
        console.error(error);
      }
    }
  } 
  
  //Cargar los elementos al momento de cargar el componente
  useEffect(() => {
    cargarCelulares();
  });

  return (
      <div className="mainCelulares">
        <h2 className='mainCelulares-header'>Administración de Celulares</h2>
        <Link to={"CreateCelular"}><Button color="teal"><Icon link name="plus" />Agregar nuevo celular</Button></Link>
        <h2>
          
        </h2>
        <div>
          {
            celulares === undefined ?
            <div className="ui active massive centered inline loader"></div>
            :
            <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id Celular</Table.HeaderCell>
                    <Table.HeaderCell>Marca</Table.HeaderCell>
                    <Table.HeaderCell>Modelo</Table.HeaderCell>
                    <Table.HeaderCell>Color</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Descripción</Table.HeaderCell>
                    <Table.HeaderCell>Operadora</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
               {celulares.map((data, indice) => {
                return (
                  <Table.Row>
                    <Table.Cell key={indice}>{data.celularId}</Table.Cell>
                    <Table.Cell>{data.marca}</Table.Cell>
                    <Table.Cell>{data.modelo}</Table.Cell>
                    <Table.Cell>{data.color}</Table.Cell>
                    <Table.Cell>{data.precio}</Table.Cell>
                    <Table.Cell>{data.descripcion}</Table.Cell>
                    <Table.Cell>{data.operadora}</Table.Cell> 
                    <Table.Cell>
                      <Link to={"UpdateCelular"}><Button onClick={() => setData(data)} color="yellow"><Icon link name="edit"/>Editar</Button></Link>
                      <Button color="red" onClick={() => onDelete(data.celularId)}><Icon link name="delete"/>Eliminar</Button>
                    </Table.Cell> 
                  </Table.Row>
                )
               })

               }
            </Table.Body>
            </Table>
          }
          
        </div>
      </div>
  );
}
