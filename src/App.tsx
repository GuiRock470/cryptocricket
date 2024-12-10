import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import customTheme from './styles/theme';
import RouteHandler from './routes';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <HashRouter>
          <AdminProvider>
            <RouteHandler />
          </AdminProvider>
        </HashRouter>
      </ChakraProvider>
    </>
  )
}

export default App
