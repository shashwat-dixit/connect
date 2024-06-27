//imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'


//layouts
import RootLayout from './layouts/RootLayout'
import UserLayout from './layouts/UserLayout'

//pages


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >


        <Route path='/user' element={<UserLayout />} >
        
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
