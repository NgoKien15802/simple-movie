import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "~/config";
import MovieCasts from "./MovieCasts/MovieCasts";
import MovieSimilar from "./MovieSimilar/MovieSimilar";
import MovieVideos from "./Movievideos/MovieVideos";

const MovieMeta = ({ type }) => {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        tmdbAPI.getMovieMeta(type, movieId),
        fetcher
    );

    console.log(data);
    if (type === "credits") {
        if (!data) return;
        const casts = data?.cast || [];
        return (
            <div className="movieCasts">
                <MovieCasts casts={casts}></MovieCasts>
            </div>
        );
    } else {
        if (!data) return;
        const results = data?.results || [];
        switch (type) {
            case "videos":
                return (
                    <div className="movieVideos">
                        <MovieVideos results={results}></MovieVideos>
                    </div>
                );

            case "similar":
                return (
                    <div className="MovieSimilar">
                        <MovieSimilar results={results}></MovieSimilar>
                    </div>
                );

            default:
                break;
        }
    }
};

export default MovieMeta;
