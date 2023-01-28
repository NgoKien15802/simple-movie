import React from "react";

import Banner from "~/components/Banner/Banner";
import MovieList from "~/components/movie/movieList/MovieList";

const HomePage = () => {
    return (
        <div>
            <Banner className="banner"></Banner>
            <section className=" page-container">
                <h1 className="my-10 text-3xl font-semibold capitalize">
                    now playing
                </h1>
                <MovieList type="now_playing"></MovieList>
            </section>

            <section className=" page-container">
                <h1 className="my-10 text-3xl font-semibold capitalize">
                    Top Rated
                </h1>
                <MovieList type="top_rated"></MovieList>
            </section>

            <section className=" page-container">
                <h1 className="my-10 text-3xl font-semibold capitalize">
                    upcoming
                </h1>
                <MovieList type="upcoming"></MovieList>
            </section>
        </div>
    );
};

export default HomePage;
