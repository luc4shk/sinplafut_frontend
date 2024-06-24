import AppRouter from "./routes/AppRouter"
import { UserContextProvider } from "./context/UserContext"
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
        <UserContextProvider>
          <AppRouter/>
        </UserContextProvider>
      <Toaster position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: 'black',
          },}}
      />
    </>
  )
}

export default App
