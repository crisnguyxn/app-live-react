import Login from "./pages/Login";
import './styles/app.css'
import Main from "./pages/Main";
function App() {

  const isLogged = true;
  if(isLogged){
    return (
              <Main/>
           )}
    return (
      <div className="App">
        <Login/>
      </div>
    )
}


export default App;
