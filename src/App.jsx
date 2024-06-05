import AppRouter from "./routes/AppRouter"
import { UserContextProvider } from "./context/UserContext"
import AuthProvider from 'react-auth-kit';
import store from "./lib/store";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <AuthProvider store={store}>
        <UserContextProvider>
          <AppRouter/>
        </UserContextProvider>
      </AuthProvider>
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
