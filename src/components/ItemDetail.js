import '../styles/layout/itemDetalle.css';
import PropTypes from 'prop-types';
import { fNumber } from '../utils/formatNumber';

function ItemDetail({ item }) {
  const {
    title = '', picture = '', sold_quantity: soldQuantity = '', condition = '',
    price = '', description = '',
  } = item || {};

  const { currency = '', amount = '' } = price || {};

  return (
    <>
      <div className="item-container-detalle">
        <img className="image-item-detalle" src={picture} alt="imagen" />
        <div className="item-data">
          <div className="item-condition">
            {`${condition
              === 'new' ? 'Nuevo' : 'Usado'} ${soldQuantity} vendidos`}

          </div>
          <div className="item-name">
            {title}
          </div>
          <div className="item-price-detalle">
            {`${currency} ${fNumber(amount)}`}
          </div>
          <button className="button-buy" type="submit">COMPRAR</button>
        </div>
      </div>
      <div className="item-description-container">
        <div className="item-description-title">
          Descripción del producto
        </div>
        <div className="item-description-detalle">
          {description}
        </div>
      </div>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ItemDetail;
