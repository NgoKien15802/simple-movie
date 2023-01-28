import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { tmdbAPI } from "~/config";

const MovieCasts = ({ casts }) => {
    return (
        <Fragment>
            <h1 className="my-10 text-3xl text-center font-body">Casts</h1>

            <Swiper grabCursor={"true"} slidesPerView="auto" spaceBetween={40}>
                {casts &&
                    casts.map((item) => (
                        <SwiperSlide>
                            <div className="flex flex-col rounded-lg">
                                <img
                                    src={tmdbAPI.imageW500(item.profile_path)}
                                    alt=""
                                    className="object-cover w-full h-full rounded-lg"
                                />
                                <p className="flex-1 mt-5 text-xl text-center">
                                    {item.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Fragment>
    );
};

export default MovieCasts;
