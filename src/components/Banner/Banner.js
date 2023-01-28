import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetcher, tmdbAPI } from "~/config";
import BannerItem from "./BannerItem/BannerItem";

const Banner = () => {
    const { data, error } = useSWR(tmdbAPI.getMovieList("upcoming"), fetcher);
    if (!data) return;
    const movies = data?.results || [];

    return (
        <Swiper grabCursor={"true"} slidesPerView={"auto"}>
            {movies.length > 0 &&
                movies.map((item) => (
                    <SwiperSlide key={item.id}>
                        <BannerItem item={item}></BannerItem>
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default Banner;
