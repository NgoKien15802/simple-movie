import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "~/components/movie/movieCard/MovieCard";
import { fetcher, tmdbAPI } from "~/config";
import useDebounce from "~/hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviePage = () => {
    const [nextPage, setNextPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [urlResult, setUrlResult] = useState(
        tmdbAPI.getMovieList("popular", nextPage)
    );
    const [pageCount, setPageCount] = useState(0);

    const handleChangeInput = (e) => {
        setSearchTerm(e.target.value);
    };

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setUrlResult(tmdbAPI.getMovieSearch(debouncedSearchTerm, nextPage));
        } else {
            setUrlResult(tmdbAPI.getMovieList("popular", nextPage));
        }
    }, [debouncedSearchTerm, nextPage]);

    const { data, error } = useSWR(urlResult, fetcher);
    const movies = data?.results || [];

    //tính total count
    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data]);

    const handlePageClick = (event) => {
        setNextPage(event.selected + 1);
    };

    return (
        <div className="mt-10 page-container">
            <div className="flex w-full h-full mb-5">
                <input
                    onChange={handleChangeInput}
                    type="text"
                    placeholder="Type here to search"
                    className="flex-1 p-4 rounded-tl-lg rounded-bl-lg outline-none bg-slate-800"
                ></input>
                <button className="p-4 text-white rounded-r-lg rounded-br-lg bg-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-4 gap-10 mb-10">
                {movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
            <div className="my-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div>
        </div>
    );
};

export default MoviePage;
