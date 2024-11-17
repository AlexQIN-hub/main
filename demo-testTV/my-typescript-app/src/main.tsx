import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainIndex from './index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainIndex />
  </StrictMode>,
)
