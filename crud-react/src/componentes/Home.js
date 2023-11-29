import "../css/Celulares.css";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="mainCelulares">
        <br />
        <br />
        <br />
        <h1>Pagina de administración de productos</h1>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
            <img src={require("../img/celular.jpg")} class="card-img-top" alt="Img de celular" style={{width:642, height:500}} />

              <div className="card-body">
                <h5 className="card-title">Celulares</h5>
                <p className="card-text">Crear, modificar y eliminar registros de celulares.</p>
                <Link to={"/celulares"}><Button color="green"><Icon link name="arrow alternate circle right outline" />  __Ir a la pagina</Button></Link>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Ultima actualización hace 15 min</small>
              </div>
            </div>
            <br />
          </div>
          <div className="col-sm-6">
            <div className="card">
            <img src={require("../img/juegos.jpg")} class="card-img-top" alt="Img de celular" style={{width:642, height:500}} />
              <div className="card-body">
                <h5 className="card-title">Juegos</h5>
                <p className="card-text">Crear, modificar y eliminar registros de  juegos.</p>
                <Link to={"/juegos"}><Button color="green"><Icon link name="arrow alternate circle right outline" />  __Ir a la pagina</Button></Link>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">Ultima actualización hace 3 min</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
