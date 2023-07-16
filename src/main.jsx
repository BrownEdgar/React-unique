import ReactDOM from 'react-dom/client'
import App from "./App"
import store from './app/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
import './index.css'
<Provider store = {store}>
    <App/>
</Provider>



// git status
// git add .
// git commit -m "your message here..."
// git pull
// git push 