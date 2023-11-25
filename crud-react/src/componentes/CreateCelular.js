import { Button, Form, Icon, Label } from "semantic-ui-react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Celulares.css";
import { useForm } from 'react-hook-form';

export default function CreateCelular({ api }){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    //Enviar los datos a la API
    async function postData(celular) {
      try {
        let respuesta = await axios.post(api, celular);
        let data =  await respuesta.data;

        if(data.status === 1){
            alert(data.message);  
            navigate("/celulares");
        }
      } catch (error) {
        alert(error);
        console.error(error);
      }
    }

    //Validaciones de datos
    const onSubmit = (data) => {
        postData(data);
    }

    return(
        <div className="mainCelulares">
            <h2 className='mainCelulares-header'>Agregar un nuevo celular</h2>
            <Form className="create-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Marca</label>
                    <input type="text" placeholder="Marca" 
                        {
                            ...register('marca', {
                                required: true,
                                minLength: 5
                            })
                        }
                    />
                    {errors.marca?.type === 'required' && <Label basic color='red' pointing>La marca es requerida</Label>}
                    {errors.marca?.type === 'minLength' && <Label basic color='red' pointing>La marca debe tener 5 caracteres minimo</Label>}
                </Form.Field>
                <Form.Field>
                    <label>Modelo</label>
                    <input placeholder="Modelo" 
                    {
                        ...register('modelo', {
                            required: true,
                            minLength: 3
                        })
                    }
                     />
                    {errors.modelo?.type === 'required' && <Label basic color='red' pointing>El modelo es requerido</Label>}
                    {errors.modelo?.type === 'minLength' && <Label basic color='red' pointing>El modelo debe tener 3 caracteres minimo</Label>}

                </Form.Field>
                <Form.Field>
                    <label>Color</label>
                    <input placeholder="Color" 
                    {
                        ...register('color', {
                            required: true,
                            minLength: 4
                        })
                    }
                     />
                    {errors.color?.type === 'required' && <Label basic color='red' pointing>El color es requerido</Label>}
                    {errors.color?.type === 'minLength' && <Label basic color='red' pointing>El color debe tener 5 caracteres minimo</Label>}
                </Form.Field>
                <Form.Field>
                    <label>Precio</label>
                    <input type="text" placeholder="Precio" 
                    {
                        ...register('precio', {
                            required: true    
                        })
                    }
                    />
                    {errors.precio?.type === 'required' && <Label basic color='red' pointing>El precio es requerido</Label>}
                </Form.Field>
                <Form.Field>
                    <label>Descripcion</label>
                    <input placeholder="Descripcion" 
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
                    <label>Operadora</label>
                    <input placeholder="Operadora" 
                    {
                        ...register('operadora', {
                            required: true,
                            minLength: 5
                        })
                    }
                     />
                     {errors.operadora?.type === 'required' && <Label basic color='red' pointing>La operadora es requerida</Label>}
                     {errors.operadora?.type === 'minLength' && <Label basic color='red' pointing>La operadora debe tener 5 caracteres minimo</Label>}
                </Form.Field>
                <Button type="submit">Enviar</Button>
                <Link to={"/celulares"}><Button color="red"><Icon link name="delete"/>Cancelar</Button></Link>
            </Form>
        </div>
    )   
}

