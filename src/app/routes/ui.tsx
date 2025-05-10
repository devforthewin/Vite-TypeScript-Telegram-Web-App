import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TodoPage} from "../../pages/to-do";
import {Suspense} from "react";

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