// infinite fetch with button to load more data
// This is used to fetch data in chunks, like pagination but with a button to load more data

import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFruits = ({ pageParam }) => {
  return axios.get(`http://localhost:4000/fruits?_limit=4&_page=${pageParam}`);
};

const InfiniteQuery = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["fruits"],
    queryFn: fetchFruits,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log("lastPage ", lastPage);
      console.log("allPages ", allPages);
      const nextPage = allPages.length + 1;
      return nextPage <= 5 ? nextPage : undefined;
    },
  });

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log("data", data);

  return (
    <div className="container">
      {data?.pages.map((page) =>
        page?.data.map((item) => (
          <div key={item.id} className="fruit-item">
            {item.name}
          </div>
        ))
      )}
      <button
        onClick={fetchNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading..."
          : hasNextPage
          ? "Load more..."
          : "No more data"}
      </button>
    </div>
  );
};

export default InfiniteQuery;
