import ReactDOM from 'react-dom/client'
import App from "./App"
import persistor, {store} from './app/store'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)


// git status
// git add .
// git commit -m "your message here..."
// git pull
// git push 