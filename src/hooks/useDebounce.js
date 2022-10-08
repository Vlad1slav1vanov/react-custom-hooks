import { useCallback, useRef } from "react";

export default function useDebounce(callback, delay) {
    const timer = useRef();

    const debauncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debauncedCallback;
};