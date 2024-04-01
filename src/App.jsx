import { useState } from 'react'
import './App.css'
import LadderGroup from './components/Ladder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-screen">
      <header className="App-header w-[360px] m-auto">
        <LadderGroup steps={stepsData} />
      </header>
    </div>
  )
}

const Icon = ({ icon }) => {
  return <div>{icon}</div>
}

const stepsData = [
  {
    id: 1,
    name: 'Step 1',
    description: 'This is step 1',
    icon: Icon,
  },
  {
    id: 2,
    name: 'Step 2',
    description: 'This is step 2',
    icon: Icon,
  },
  {
    id: 3,
    name: 'Step 3',
    description: 'This is step 3',

    icon: Icon,
    steps: [
      {
        id: 31,
        name: 'Step 3-1',
        description: 'This is step 3-1',
        icon: Icon,
      },
      {
        id: 32,
        name: 'Step 3-2',
        description: 'This is step 3-2',
        icon: Icon,
      },
      {
        id: 33,
        name: 'Step 3-3',
        description: 'This is step 3-3',
        icon: Icon,
      },
    ],
  },
]

export default App
