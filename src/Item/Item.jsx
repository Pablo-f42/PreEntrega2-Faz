import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>

      <img src={img} alt={nombre} />

      <div className='informacion'>
        <h3>{nombre}</h3>
        <h4>{precio} US$</h4>
        <p>ID:{id}</p>
        <Link className='btn' to={`/item/${id}`}>Ver Detalles</Link>
      </div>

    </div>
  )
}

export default Item