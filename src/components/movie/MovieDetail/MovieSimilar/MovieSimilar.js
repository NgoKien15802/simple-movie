import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "~/components/movie/movieCard/MovieCard";

const MovieSimilar = ({ results }) => {
    return (
        <div className="mb-10 movieList">
            <h1 className="my-10 text-3xl text-center font-body">
                Similars movie
            </h1>
            <Swiper grabCursor={"true"} spaceBetween={27} slidesPerView="auto">
                {results.length > 0 &&
                    results.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default MovieSimilar;
