"use client";

import fetchPictures from "@/actions/fetch-pictures";
import LoadingSpinner from "@/components/ui/loading-spinner";
import {
  QueryFunction,
  QueryKey,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export default function Pictures({
  firstPictures,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  firstPictures: any;
}) {
  const ref = useRef(null);
  const inView = useInView(ref);

  const _fetchPictures: QueryFunction<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    QueryKey,
    number
  > = async ({ pageParam }) => {
    const data = await fetchPictures({ pageParam });
    return data;
  };

  const getInitialPageParam = () => {
    const pagination: Pagination = firstPictures.meta.pagination;
    return pagination.page < pagination.pageCount ? pagination.page + 1 : null;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useInfiniteQuery<any, any, any, any, any>({
    queryKey: ["pictures"],
    queryFn: _fetchPictures,
    initialPageParam: getInitialPageParam(),
    getNextPageParam: (lastPage) => {
      const pagination: Pagination = lastPage.meta.pagination;
      return pagination.page < pagination.pageCount
        ? pagination.page + 1
        : null;
    },
  });

  useEffect(() => {
    console.log(inView, hasNextPage, isFetching);
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetching]);

  const pictures: string[] = (data?.pages || []).reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: string[], curr: any) => [...acc, ...curr.data],
    firstPictures.data
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mt-4">
      {pictures.map((x, i) => (
        <div key={i} className="aspect-square w-full relative">
          <Image
            decoding="sync"
            src={x}
            className="bg-gray-300"
            fill
            alt="bolo feito com amor"
          />
          <Link
            href="/contact"
            className="absolute opacity-0 hover:opacity-80 bg-[#262321] w-full h-full transition-all duration-300 text-white flex justify-center items-center text-lg"
          >
            Encomende Já
          </Link>
        </div>
      ))}
      {((data?.pages || []).length === 0 || hasNextPage) && (
        <div
          ref={ref}
          className="flex justify-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
        >
          <LoadingSpinner className="h-10 w-10 stroke-gray-500 mt-2 sm:mt-4" />
        </div>
      )}
    </div>
  );
}

