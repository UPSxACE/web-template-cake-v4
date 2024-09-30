"use server";
import api from "@/api";

export default async function fetchLastPictures() {
  return await api
    .get(
      `api/galerias?pagination[page]=1&pagination[pageSize]=8&populate=*&sort=createdAt:desc`
    )
    .then(({ data: { data } }) => {
      return data.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (imageObj: any) => {
          const url =
            imageObj?.Imagem?.formats?.medium?.url ||
            imageObj?.Imagem?.formats?.small?.url ||
            imageObj?.Imagem?.formats?.thumbnail?.url;

          return url ? process.env.API_URL + url : "/";
        }
      );
    });
}
