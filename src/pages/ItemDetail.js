import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layouts/header';
import ItemDetalle from '../components/ItemDetail';
import useApi from '../hooks/useApi';
import endpoints from '../routes/endpoint';

export default function ItemDetail() {
  const { doGet } = useApi();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const loadInitForm = async () => {
      const url = `${endpoints.search}/${id}`;
      const resp = await doGet(url);
      setItem(resp.item);
    };
    loadInitForm();
  }, []);

  return (
    <>
      <Header />
      {item && <ItemDetalle item={item} />}
    </>
  );
}
