import ReactDOM from 'react-dom/client'
import App1 from "./App1"
import store from './app/store'
import { Provider } from 'react-redux'


import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App1 />
</Provider>
)


