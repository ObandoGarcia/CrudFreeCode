import { Link } from "react-router-dom";
import "../css/Menu.css";

export default function Menu() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Tenth navbar example" data-bs-theme="dark">
          <div className="container-fluid">     
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Proyecto React</Link> 
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/celulares"}>Celulares</Link> 
              </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to={"/juegos"}>Juegos</Link> 
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
