import React, { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroll = ({ getData, listData, query }) => {
  const [loading, setLoading] = useState(false);

  const pageNumber = useRef(1);

  const fetchData = useCallback(() => {
    setLoading(true);
    getData(query, pageNumber.current).finally(() => {
      setLoading(false);
    });
  }, [query, getData]);

  const observer = useRef(null);
  const lastElementOberver = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          pageNumber.current += 1;
          fetchData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchData, loading]
  );

  useEffect(() => {
    let timer = null;
    const debounce = (fn, delay) => {
      return function (...args) {
        let context = this;
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    };
    const debounceFetch = debounce(fetchData, 300);
    debounceFetch();
    return () => clearTimeout(timer);
  }, [fetchData]);
  return (
    <>
      {listData.map((item, index) => {
        if (index === listData.length - 1) {
          return <div ref={lastElementOberver}>{item.title}</div>;
        }
        return <div ref={null}>{item.title}</div>;
      })}

      {loading && "LOADING"}
    </>
  );
};

export default InfiniteScroll;
