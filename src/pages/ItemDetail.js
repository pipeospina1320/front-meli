import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layouts/header';
import ItemDetalle from '../components/ItemDetail';
import useApi from '../hooks/useApi';
import endpoints from '../routes/endpoint';
import Breadcrumb from '../components/Breadcrumb';

export default function ItemDetail() {
  const { doGet } = useApi();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const loadInitForm = async () => {
      const url = `${endpoints.search}/${id}`;
      const resp = await doGet(url);
      const paths = resp.categories.path_from_root;
      setItem(resp.item);
      setCategories(paths);
    };
    loadInitForm();
  }, []);

  return (
    <>
      <Header />
      {categories.length > 0 && <Breadcrumb categories={categories} />}
      {item && <ItemDetalle item={item} />}
    </>
  );
}
