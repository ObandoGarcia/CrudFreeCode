import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3"> <span class="text-danger">Opps!</span> Pagina no encontrada.</p>
          <p className="lead">
            La pagina a la que intentas acceder no esta disponible.
          </p>
          <Link className="btn btn-primary" to={'/'}>Ir a inicio</Link>
        </div>
      </div>
    </div>
  )
}

