import { Button, Form, Icon } from "semantic-ui-react"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Celulares.css";

export default function CreateCelular({ api }){

    const navigate = useNavigate();

    const[marca, setMarca] = useState("");
    const[modelo, setModelo] = useState("");
    const[color, setColor] = useState("");
    const[precio, setPrecio] = useState("");
    const[descripcion, setDescripcion] = useState("");
    const[operadora, setOperadora] = useState("");


    //Enviar los datos a la API
    async function postData() {
      try {
        let respuesta = await axios.post(api, {
          marca,
          modelo,
          color,
          precio,
          descripcion,
          operadora,
        });

        let data =  await respuesta.data;

        if(data.status === 1){
            alert(data.message);  
            navigate("/celulares");
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }

    return(
        <div className="mainCelulares">
            <h2 className='mainCelulares-header'>Agregar un nuevo celular</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>Marca</label>
                    <input placeholder="Marca" onChange={(e) => setMarca(e.target.value)} />
                </Form.Field>
            <Form.Field>
                    <label>Modelo</label>
                    <input placeholder="Modelo" onChange={(e) => setModelo(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Color</label>
                    <input placeholder="Color" onChange={(e) => setColor(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Operadora</label>
                    <input placeholder="Operadora" onChange={(e) => setOperadora(e.target.value)} />
                </Form.Field>
                <Button type="submit" onClick={postData}>Enviar</Button>
                <Link to={"/celulares"}><Button color="red"><Icon link name="delete"/>Cancelar</Button></Link>
            </Form>
        </div>
    )   
}

