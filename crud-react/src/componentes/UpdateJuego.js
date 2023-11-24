import { Button, Form, Icon } from "semantic-ui-react"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Juegos.css";

export default function UpdateJuego({ api }) {

  //Navegacion entre paginas
  const navigate = useNavigate();

  const [juegoId, setJuegoId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");

  //Obtener los elementos del almacenamiento local
  useEffect(() => {
    setJuegoId(localStorage.getItem("juegoId"));
    setTitulo(localStorage.getItem("titulo"));
    setDescripcion(localStorage.getItem("descripcion"));
    setPlataforma(localStorage.getItem("plataforma"));
    setPrecio(localStorage.getItem("precio"));
    setCategoria(localStorage.getItem("categoria"));
  }, []);

  //Funcion de actializar
  async function ActualizarJuegoApiData(){
    try{
      let respuesta = await axios.put(api, {
        juegoId,
        titulo,
        descripcion,
        plataforma,
        precio,
        categoria
      })

      let data = await respuesta.data;

      if(data.status === 1){
        alert(data.message);
        navigate("/juegos");
      }

    }catch(error){
      alert(error);
      console.error(error);
    }
  }

  return (
    <div className="mainJuegos">
            <h2 className='mainJuegos-header'>Agregar un nuevo juego</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>Juego Id</label>
                    <input placeholder="Juego Id" value={juegoId} onChange={(e) => setJuegoId(e.target.value)} readOnly/>
                </Form.Field>
                <Form.Field>
                    <label>Titulo</label>
                    <input placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Plataforma</label>
                    <input placeholder="Plataforma" value={plataforma} onChange={(e) => setPlataforma(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Categoria</label>
                    <input placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
                </Form.Field>
                <Button type="submit" onClick={ActualizarJuegoApiData}>Enviar</Button>
                <Link to={"/juegos"}><Button color="red"><Icon link name="delete"/>Cancelar</Button></Link>
            </Form>
        </div>
  )
}
