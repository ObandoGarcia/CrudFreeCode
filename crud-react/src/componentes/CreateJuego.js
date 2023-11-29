import { Button, Form, Icon, Label } from "semantic-ui-react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Juegos.css";
import { useForm } from 'react-hook-form';

export default function CreateJuego({ api }) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  //Enviar los datos a la API
  async function postData(juego){
    try{
      let respuesta = await axios.post(api, juego);
      let data = await respuesta.data;

      if(data.status === 1){
        alert(data.message);
        navigate("/juegos");
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  const onSubmit = (data) => {
    postData(data);
  }

  return (
    <div className="mainJuegos">
            <h2 className='mainJuegos-header'>Agregar un nuevo juego</h2>
            <Form className="create-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Titulo</label>
                    <input type="text" placeholder="Titulo"
                      {
                            ...register('titulo', {
                                required: true,
                                minLength: 5
                            })
                      }
                      />
                      {errors.titulo?.type === 'required' && <Label basic color='red' pointing>El titulo es requerido</Label>}
                      {errors.titulo?.type === 'minLength' && <Label basic color='red' pointing>El titulo debe tener 5 caracteres minimo</Label>}
                </Form.Field>
            <Form.Field>
                    <label>Descripcion</label>
                    <input type="text" placeholder="Descripcion" 
                    {
                            ...register('descripcion', {
                                required: true,
                                minLength: 15
                            })
                    }
                     />
                    {errors.descripcion?.type === 'required' && <Label basic color='red' pointing>La descripcion es requerida</Label>}
                    {errors.descripcion?.type === 'minLength' && <Label basic color='red' pointing>La descripcion debe tener 15 caracteres minimo</Label>}
                </Form.Field>
                <Form.Field>
                    <label>Plataforma</label>
                    <input type="text" placeholder="Plataforma" 
                    {
                            ...register('plataforma', {
                                required: true,
                                minLength: 2
                            })
                    }
                     />
                    {errors.plataforma?.type === 'required' && <Label basic color='red' pointing>La plataforma es requerida</Label>}
                    {errors.plataforma?.type === 'minLength' && <Label basic color='red' pointing>La plataforma debe tener 2 caracteres minimo</Label>} 

                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input type="text" placeholder="Precio" 
                      {
                            ...register('precio', {
                                required: true,
                                
                            })
                      }
                    />
                    {errors.precio?.type === 'required' && <Label basic color='red' pointing>El precio es requerido</Label>}
                    
                </Form.Field>
                <Form.Field>
                    <label>Categoria</label>
                    <input type="text" placeholder="Categoria"  
                      {
                            ...register('categoria', {
                                required: true,
                                minLength: 5
                            })
                      }  
                    />
                    {errors.categoria?.type === 'required' && <Label basic color='red' pointing>La categoria es requerida</Label>}
                    {errors.categoria?.type === 'minLength' && <Label basic color='red' pointing>La categoria debe tener 5 caracteres minimo</Label>}
                </Form.Field>
                <Button type="submit">Enviar</Button>
                <Link to={"/juegos"}><Button color="red"><Icon link name="delete"/>Cancelar</Button></Link>
            </Form>
        </div>
  )
}
