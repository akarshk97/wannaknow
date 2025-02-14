import './App.css'
import { MantineProvider } from '@mantine/core';
import ValentineGreeting from './components/ValentineGreeting'

function App() {
  return (
    <MantineProvider>
      <div className="app">
        <ValentineGreeting />
      </div>
    </MantineProvider>
  )
}

export default App
