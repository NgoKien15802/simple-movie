import { Fragment } from "react";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Main from "~/components/layout/Main";
import HomePage from "./pages/HomePage";
import MoveDetailPage from "./pages/MoveDetailPage";
import MoviePage from "./pages/MoviePage";
import PageNotFound from "./pages/PageNotFound";
import MoviePageLoadmore from "./pages/MoviePageLoadmore";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Main></Main>}>
                    <Route
                        path="/simple-movie"
                        element={<HomePage></HomePage>}
                    ></Route>
                    <Route
                        path="/simple-movie/movie"
                        // element={<MoviePage></MoviePage>}
                        element={<MoviePageLoadmore></MoviePageLoadmore>}
                    ></Route>
                    <Route
                        path="/simple-movie/movie/:movieId"
                        element={<MoveDetailPage></MoveDetailPage>}
                    ></Route>
                    <Route
                        path="*"
                        element={<PageNotFound></PageNotFound>}
                    ></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
