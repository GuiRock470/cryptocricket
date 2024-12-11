import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './styles/theme';
import RouteHandler from './routes';
import { AdminProvider } from './context/AdminContext';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <AdminProvider>
          <HashRouter>
            <RouteHandler />
          </HashRouter>
        </AdminProvider>
      </ChakraProvider>
    </>
  )
}

export default App
