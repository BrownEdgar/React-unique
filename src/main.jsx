import ReactDOM from 'react-dom/client'
import App2 from "./App2"
import store from './app/store'
import { Provider } from 'react-redux'


import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App2 />
</Provider>
)


