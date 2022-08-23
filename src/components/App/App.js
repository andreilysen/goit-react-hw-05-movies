import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header";
import Container from "../Container";
import Loader from "../Loader";

const FilmPage = lazy(() => import("../../pages/FilmPage"));
const Movies = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));

function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <FilmPage />
          </Route>
          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
