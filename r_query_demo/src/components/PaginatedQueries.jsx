import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchFruits = (pageId) => {
  console.log("fetching fruits for page", pageId);

  return axios.get(`http://localhost:4000/fruits?_limit=4&_page=${pageId}`);
};

const PaginatedQueries = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["fruits", page],
    queryFn: () => fetchFruits(page),
    placeholderData: keepPreviousData,
    // This will keep the previous data while the new data is being fetched
  });
  console.log(page);

  if (isLoading) {
    return <h2>Page is Loading...</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="container">
      {data?.data.map((item) => (
        <div className="fruit-label">{item.name}</div>
      ))}
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1 ? true : false}
      >
        Prev page
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page == 5 ? true : false}
      >
        next page
      </button>
    </div>
  );
};

export default PaginatedQueries;
