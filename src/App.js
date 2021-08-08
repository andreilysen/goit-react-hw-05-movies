import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Container from "./components/Container";

const FilmList = lazy(() => import("./pages/FilmList"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Container>
  );
}

export default App;
