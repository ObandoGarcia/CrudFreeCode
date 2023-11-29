import { Button, Form, Icon } from "semantic-ui-react"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Celulares.css";

export default function UpdateCelular({ api }) {

  //para la navegacion entre paginas
  const navigate = useNavigate();

  const [celularId, setCelularId] = useState("");
  const[marca, setMarca] = useState("");
  const[modelo, setModelo] = useState("");
  const[color, setColor] = useState("");
  const[precio, setPrecio] = useState("");
  const[descripcion, setDescripcion] = useState("");
  const[operadora, setOperadora] = useState("");


  //Funcion de actualizar
  async function ActualizarCelularApiData(){
    try{
      let respuesta = await axios.put(api, {
        celularId,
        marca,
        modelo,
        color,
        precio,
        descripcion,
        operadora
      })

      let data = await respuesta.data;
      
      if(data.status === 1){
        alert(data.message);
        navigate("/celulares");      
      }

    }catch(error){
      alert(error);
      console.error(error);
    }
  }

  //obtener los elemntos del almacenamiento local
  useEffect(() => {
    setCelularId(localStorage.getItem("celId"));
    setMarca(localStorage.getItem("marca"));
    setModelo(localStorage.getItem("modelo"));
    setColor(localStorage.getItem("color"));
    setPrecio(localStorage.getItem("precioCelular"));
    setDescripcion(localStorage.getItem("descripcion"));
    setOperadora(localStorage.getItem("operadora"));
  }, []);

  return (
    <div className="mainCelulares">
        <h2 className='mainCelulares-header'>Actualizar celular</h2>
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Celular Id</label>
                    <input type="text" placeholder="Celular Id" value={celularId} onChange={(e) => setCelularId(e.target.value)} readOnly/>
                </Form.Field>
                <Form.Field>
                    <label>Marca</label>
                    <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Modelo</label>
                    <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Color</label>
                    <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Descripción</label>
                    <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Operadora</label>
                    <input type="text" placeholder="Operadora" value={operadora} onChange={(e) => setOperadora(e.target.value)} />
                </Form.Field>
                <Button type="submit" onClick={ActualizarCelularApiData}>Actualizar</Button>
                <Link to={"/celulares"}><Button color="red"><Icon link name="delete"/>Cancelar</Button></Link>
            </Form>
        </div>
    </div>
  )
}
