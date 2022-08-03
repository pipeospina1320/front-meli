import '../styles/layout/breadcrumb.css';
import PropTypes from 'prop-types';

function Breadcrumb({ categories }) {
  const names = categories.map((root) => (root.name));
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb">
        {names.length > 0 && names.join(' > ')}
      </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Breadcrumb;
