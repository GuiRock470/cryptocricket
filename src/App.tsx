import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './styles/theme';
import RouteHandler from './routes';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <AdminProvider>
          <RouteHandler />
        </AdminProvider>
      </ChakraProvider>
    </>
  )
}

export default App
