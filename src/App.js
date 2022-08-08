import './App.css';
import Auth from './components/auth/Auth';
import { BloggerContext } from './context/BloggerContext';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className="App">
        <BloggerContext>
          <ToastProvider>
              <Auth />
          </ToastProvider>
        </BloggerContext>
    </div>
  );
}

export default App;
