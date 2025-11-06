import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
