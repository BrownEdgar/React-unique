import ReactDOM from 'react-dom/client'
import App2 from "./App2"
import persistor, {store} from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App2 />
    </PersistGate>
  </Provider>,
)


