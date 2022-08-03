import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ItemDetail from '../pages/ItemDetail';
import SearchResults from '../pages/SearchResults';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="items" element={<SearchResults />} />
        <Route exact path="items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
