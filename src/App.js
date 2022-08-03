import { ApiProvider } from './contexts/ApiContext';
import Router from './routes';

function App() {
  return (
    <ApiProvider>
      <Router />
    </ApiProvider>
  );
}

export default App;
