import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import { Suspense } from 'react'
import { ToastProvider, ThemeProvider, AuthProvider } from './context'
import { nestLayouts } from './util/routes'

const AutoRoutes = () => {
  const nestedRoutes = nestLayouts(routes)
  const element = useRoutes(nestedRoutes)

  return (
    <Suspense fallback={<p>Loading...</p>}>
      {element}
    </Suspense>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider >
        <ToastProvider>
          <AuthProvider>
            <AutoRoutes />
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider >
    </BrowserRouter>
   );
}
 
export default App;