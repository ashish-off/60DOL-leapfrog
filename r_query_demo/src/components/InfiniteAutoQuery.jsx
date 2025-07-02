
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fetchFruits = ({ pageParam }) => {
  return axios.get(`http://localhost:4000/fruits?_limit=10&_page=${pageParam}`);
};

const InfiniteAutoQuery = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["fruits"],
    queryFn: fetchFruits,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= 6 ? nextPage : undefined;
    },
  });
  
  const {ref, inView} = useInView();
  
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    
  }, [inView, fetchNextPage ])
  console.log("inview",inView);
  

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

      <div ref={ref}>{isFetchingNextPage ? "loading..." : "no more pages ahead" }</div>
    </div>
  );
};

export default InfiniteAutoQuery;
