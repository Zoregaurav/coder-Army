import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Counter from './Counter'
import List from './List'

createRoot(document.getElementById('root')).render(
    <>
    {/* <App /> */}
    {/* <Counter/> */}
    <List/>
    </>

)

