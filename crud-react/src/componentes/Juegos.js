import "../css/Juegos.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Table, Button, Icon } from "semantic-ui-react";

export default function Juegos( { api }) {

  const [juegos, setJuegosApiData] =  useState([]);

  //Listar los elemento en la tabla
  async function cargarJuegos(){
    try{
      axios.get(api).then((response) => {
        setJuegosApiData(response.data);
      })
    }catch(error){
      alert(error);
      console.error(error);
    }
  }

  //Cargar los elementos al almacenamiento local
  const setData = (data) => {
    let { juegoId, titulo, descripcion, plataforma, precio, categoria } = data;
    localStorage.setItem("juegoId", juegoId);
    localStorage.setItem("titulo", titulo);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("plataforma", plataforma);
    localStorage.setItem("precio", precio);
    localStorage.setItem("categoria", categoria);
  }

  //Funcion de eliminar
  async function onDelete(id){
    try{
      let respuesta = await axios.delete(api + "?id=" + id);
      let data = await respuesta.data;

      if(data.status === 1){
        alert(data.message);
        cargarJuegos();
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
  
  //Cargar los elementos al cargar el componente
  useEffect(() => {
    cargarJuegos();
  });

  return (
    <div className="mainJuegos">
        <h2 className='mainJuegos-header'>Administracion de Juegos</h2>
        <Link to={"CreateJuego"}><Button color="teal"><Icon link name="plus" />Agregar nuevo juego</Button></Link>
        <h2>
          
        </h2>
        <div>
          {
            juegos === undefined ?
            <div className="ui active massive centered inline loader"></div>
            :
            <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Id Juego</Table.HeaderCell>
                    <Table.HeaderCell>Titulo</Table.HeaderCell>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.HeaderCell>Plataforma</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Categoria</Table.HeaderCell> 
                    <Table.HeaderCell>Acciones</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
               {juegos.map((data, indice) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.juegoId}</Table.Cell>
                    <Table.Cell>{data.titulo}</Table.Cell>
                    <Table.Cell>{data.descripcion}</Table.Cell>
                    <Table.Cell>{data.plataforma}</Table.Cell>
                    <Table.Cell>{data.precio}</Table.Cell>
                    <Table.Cell>{data.categoria}</Table.Cell>              
                    <Table.Cell>
                      <Link to={"UpdateJuego"}><Button onClick={() => setData(data)} color="yellow"><Icon link name="edit"/>Editar</Button></Link>
                      <Button color="red" onClick={() => onDelete(data.juegoId)}><Icon link name="delete"/>Eliminar</Button>
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
  )
}
