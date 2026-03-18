// * You can call hooks from custom hooks, which are JavaScript functions whose names start with ”use” and that may call other hooks.)
import { useEffect, useState } from "react";

export function useFetch(fetchFunc, initialValue = []) {
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFunc();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data!' });
            }

            setIsFetching(false);
        }

        fetchData();
    }, [fetchFunc]);

    return {fetchedData, isFetching, error, setFetchedData}
}