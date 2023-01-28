import React from "react";
import { useNavigate } from "react-router";

import Button from "~/components/button/Button";
import { tmdbAPI } from "~/config";

const BannerItem = ({ item }) => {
    const navigate = useNavigate();

    const { title, poster_path, genre_ids, id } = item;

    return (
        <div className="page-container relative h-[500px] mt-10 rounded-lg">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={tmdbAPI.imageOriginal(poster_path)}
                alt=""
                className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute left-5 bottom-5">
                <h1 className="mb-5 text-4xl font-semibold">{title}</h1>
                <div className="flex mb-10 gap-x-5">
                    {genre_ids.length > 0 &&
                        genre_ids.map((item, index) => (
                            <Button
                                key={index}
                                className="px-5 py-2 border"
                                color="transparent"
                            >
                                Address
                            </Button>
                        ))}
                </div>
                <Button onClick={() => navigate(`simple-movie/movie/${id}`)}>
                    Watch now
                </Button>
            </div>
        </div>
    );
};

export default BannerItem;
