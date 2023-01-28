import React, { Fragment } from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetcher, tmdbAPI } from "~/config";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ type }) => {
    const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    if (!data) return;
    const movies = data?.results || [];
    return (
        <div className="movieList">
            <Swiper grabCursor={"true"} slidesPerView="auto" spaceBetween={27}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default MovieList;
