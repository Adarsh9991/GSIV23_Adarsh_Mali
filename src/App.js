import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import store from "./Redux/Store";
import { Provider } from "react-redux";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header />
      <Routes>
      <Route path="/" element={<MovieList/>} />
      {/* <Route path="/details/" element={<DetailsPage />} /> */}
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
    </Provider>
      
    </div>
  );
}

export default App;
