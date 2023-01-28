import { useState, useEffect } from "react";

//tránh TH request liên tục
export default function useDebounce(initialValue, delay = 1000) {
    const [debounceValue, setDebounceValue] = useState(initialValue);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(initialValue);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, initialValue]);

    return debounceValue;
}
