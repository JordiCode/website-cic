import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.tsx'
import { Home } from './pages/Home.tsx'
import { LogginAccount } from './pages/LoginAccount.tsx'
import { MaintenancePage } from './pages/MaintenancePage.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Dashboard } from './pages/Dashboard.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, },
      { path: 'iniciar-sesion', element: <LogginAccount /> },
      { path: "*", element: <MaintenancePage /> },
    ],
  },
  {
    path: '/dashboard',
    element:
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
