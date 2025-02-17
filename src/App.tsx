import './App.css'
import { MantineProvider } from '@mantine/core';
import ValentinesGreeting from './components/ValentinesGreeting'

function App() {
  return (
    <MantineProvider>
      <div className="app">
        <ValentinesGreeting />
      </div>
    </MantineProvider>
  )
}

export default App
