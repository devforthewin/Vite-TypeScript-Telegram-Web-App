import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { TodoPage } from '../../pages/to-do'

export function AppPagesWithRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading ...'}>
        <Routes>
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}