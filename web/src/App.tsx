import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react'
import WebApp from '@twa-dev/sdk'
import { useState } from 'react'

import './App.css'

const MANIFEST_URL = 'https://usavkov-epam.github.io/ton-social-passport/tonconnect-manifest.json';

function App() {
  const [count, setCount] = useState(0)

  return (
    <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
      <TonConnectButton />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
		{/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
