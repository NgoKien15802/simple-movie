import React, { Fragment } from "react";

const MovieVideos = ({ results }) => {
    return (
        <div className="mt-10">
            <h1 className="text-3xl text-center">Trailers</h1>
            {results.length > 0 &&
                results.slice(0, 2).map((item) => (
                    <div key={item.id} className="mt-10">
                        <h3 className="inline-block p-2 mb-5 text-xl font-medium bg-secondary">
                            {item.name}
                        </h3>
                        <iframe
                            width="967"
                            height="544"
                            src={`https://www.youtube.com/embed/${item.key}`}
                            title="Một Chút EDM Mix Chill ♫ Top 20 Bản EDM Điện Tử Gaming Music Hay Nhất Cho Ngày Dài Mệt Mỏi Gây Ghiện"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="object-fill w-full h-screen"
                        ></iframe>
                    </div>
                ))}
        </div>
    );
};

export default MovieVideos;
