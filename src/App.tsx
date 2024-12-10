import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import customTheme from './styles/theme';
import RouteHandler from './routes';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <BrowserRouter>
          <AdminProvider>
            <RouteHandler />
          </AdminProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
