import {Routes, Route} from "react-router-dom"
import "./App.scss"
import {Home, Header, MoviesDetail, Footer, Error} from "./COMPONENTS/index"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/movies:Id" element = {<MoviesDetail />} />
      <Route path = "/*" element = {<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
