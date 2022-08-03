/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../styles/layout/item.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { fNumber } from '../utils/formatNumber';

function Item({
  id, price, title, picture, freeShipping,
  stateName,
}) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`${id}`);
  };
  const { currency, amount } = price;
  return (
    <div
      className="item-container"
    >
      <div className="item">
        <img
          className="image-item"
          src={picture}
          alt=""
          onClick={() => goToDetail()}
        />
        <div>
          <div className="item-price">
            {`${currency} ${fNumber(amount)}`}
            {freeShipping && (
            <img className="image-shipping" src="/assets/ic_shipping@2x.png.png" alt="" />)}
          </div>
          <div className="item-description">{title}</div>
        </div>

      </div>
      <div className="item-city-container">
        <div className="item-city">
          {stateName}
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  price: PropTypes.oneOfType([PropTypes.object]).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  // condition: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default Item;
