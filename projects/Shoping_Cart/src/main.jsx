import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './Context/filters.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
