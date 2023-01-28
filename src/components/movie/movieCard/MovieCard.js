import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "~/components/button/Button";
import { tmdbAPI } from "~/config";

const MovieCard = ({ item }) => {
    const navigate = useNavigate();
    const { poster_path, title, release_date, vote_average, id } = item;
    console.log(item);
    return (
        <div className="flex flex-col h-full p-3 rounded-lg bg-slate-800">
            <img
                src={tmdbAPI.imageW500(poster_path)}
                alt=""
                className="object-cover w-full h-[250px] mb-5 rounded-lg"
            />
            <div className="flex flex-col flex-1">
                <h2 className="mb-2 text-xl font-bold ">{title}</h2>
                <div className="flex items-center justify-between mb-10 text-sm text-gray-500">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>

                <Button
                    full
                    onClick={() => navigate(`/simple-movie/movie/${id}`)}
                >
                    Watch now
                </Button>
            </div>
        </div>
    );
};

export default MovieCard;
