import {Suspense} from 'react'
import {AppPagesWithRoutes} from "./app/routes";

function App() {
  return (
    <Suspense fallback={'Loading ...'}>
      <AppPagesWithRoutes/>
    </Suspense>
  )
}

export default App
