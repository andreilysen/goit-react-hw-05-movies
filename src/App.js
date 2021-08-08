import { Route, Switch } from "react-router";
import Header from "./components/Header";
import FilmList from "./pages/FilmList";
import Movies from "./pages/Movies";
import MovieDetailsPage from "./pages/MovieDetailsPage";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <FilmList />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
