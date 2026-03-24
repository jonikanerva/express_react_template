import { hydrateRoot } from 'react-dom/client'

import App from './components/App'

hydrateRoot(document.querySelector('#root')!, <App />)
