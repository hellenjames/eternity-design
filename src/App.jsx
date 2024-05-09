import EternityContextProvider from "./context/state"
import Router from "./components/Router"
function App(){
  return(
    <EternityContextProvider>
    <Router/>
    </EternityContextProvider>
  )
}export default App