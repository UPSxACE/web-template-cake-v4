"use server";
import api from "@/api";

export default async function fetchPictures({
  pageParam,
}: {
  pageParam: number;
}) {
  return await api
    .get(
      `api/galerias?pagination[page]=${pageParam}&pagination[pageSize]=8&populate=*`
    )
    .then(({ data }) => {
      data.data = data.data.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (imageObj: any) => {
          const url =
            imageObj?.Imagem?.formats?.medium?.url ||
            imageObj?.Imagem?.formats?.small?.url ||
            imageObj?.Imagem?.formats?.thumbnail?.url;

          return url ? process.env.API_URL + url : "/";
        }
      );
      return data;
    });
}
