
import './App.css'
import { UserContextProvider } from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    
   </UserContextProvider>
  )
}

export default App
