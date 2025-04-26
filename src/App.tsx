import './App.css'
import { Window } from './components/Window/Window'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {

  return (
    <div>
      <Window />
    </div>
  )
}

export default App
