import '../styles/layout/breadcrumb.css';
import PropTypes from 'prop-types';

function Breadcrumb({ categories }) {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb">
        {categories.map(() => <div>hol</div>)}
      </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Breadcrumb;
