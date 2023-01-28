import React, { Fragment } from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "~/config";
import { useParams } from "react-router-dom";
import Button from "~/components/button/Button";
import MovieMeta from "~/components/movie/MovieDetail/MovieMeta";

const MoveDetailPage = () => {
    const { movieId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher);
    if (!data) return;
    const { backdrop_path, genres, overview, poster_path, title } = data;

    return (
        <Fragment>
            <div className="w-full h-[600px] relative mt-10">
                <div className="absolute inset-0 bg-black bg-opacity-50 overlay"></div>
                <img
                    src={tmdbAPI.imageOriginal(backdrop_path)}
                    alt=""
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="max-w-[800px] w-full h-[300px] rounded-lg mx-auto -mt-[200px] relative z-10">
                <img
                    src={tmdbAPI.imageOriginal(poster_path)}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <h1 className="my-10 text-4xl font-bold text-center">{title}</h1>
            <div className="flex items-center justify-center mb-10 gap-x-5">
                {genres &&
                    genres.map((item) => (
                        <Button
                            key={item.id}
                            className="border rounded-none border-primary text-primary"
                            color="transparent"
                        >
                            {item.name}
                        </Button>
                    ))}
            </div>

            <p className="max-w-[600px] w-full leading-relaxed text-center mx-auto">
                {overview}
            </p>
            <MovieMeta type="credits"></MovieMeta>
            <MovieMeta type="videos"></MovieMeta>
            <MovieMeta type="similar"></MovieMeta>
        </Fragment>
    );
};

export default MoveDetailPage;
