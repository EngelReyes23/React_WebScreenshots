// Local Imports
import { AppProvider } from './provider/AppProvider';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
