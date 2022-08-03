import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../layouts/header';
import Item from '../components/Item';
import Breadcrumb from '../components/Breadcrumb';
import endPoints from '../routes/endpoint';
import useApi from '../hooks/useApi';

export default function SearchResults() {
  const { doGet } = useApi();
  const [searchParams] = useSearchParams();
  const [state, setState] = useState({
    categories: [],
    items: [],
  });

  useEffect(() => {
    const loadInitForm = async () => {
      const params = {
        q: searchParams.get('search'),
        limit: 4,
      };
      const { categories, items } = await doGet(endPoints.search, params);
      const { values = [] } = categories || {};
      const paths = values[0].path_from_root;
      setState({
        categories: paths, items,
      });
    };

    loadInitForm();
  }, []);

  const { items, categories } = state;
  return (
    <>
      <Header />
      {categories.length > 0 && <Breadcrumb categories={categories} />}

      {(items.length !== 0)
      && (items.map(({
        id, price, title, picture, condition, free_shipping: freeShipping,
        stateName,
      }) => (
        <Item
          key={id}
          id={id}
          price={price}
          title={title}
          picture={picture}
          condition={condition}
          freeShipping={freeShipping}
          stateName={stateName}
        />
      )))}
    </>
  );
}
