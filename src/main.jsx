import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.scss';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { ShoppingListProvider } from './contexts/ShoppingListContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ShoppingListProvider>
        <App />
      </ShoppingListProvider>
    </ThemeProvider>
  </StrictMode>
);
