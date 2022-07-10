import {createRoot} from 'react-dom/client';
import {App} from "./src/App";
import './src/style.scss'

const container = document.getElementById('root')
const root = createRoot(container!);

root.render(
    <App />
)
