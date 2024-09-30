"use server";

import api from "@/api";
import { PriceData } from "@/app/options";
export default async function fetchPrices(): Promise<PriceData[]> {
  return await api
    .get("api/precos?pagination[page]=1&pagination[pageSize]=100&populate=*")
    .then(({ data: { data } }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data.map((x: any) => {
        const url =
          x?.imagem?.formats?.medium?.url ||
          x?.imagem?.formats?.small?.url ||
          x?.imagem?.Imagem?.formats?.thumbnail?.url;

        return {
          imageSrc: url ? process.env.API_URL + url : "/",
          title: x.titulo,
          description: x.descricao,
          price: x.preco,
        };
      });
    });
}
