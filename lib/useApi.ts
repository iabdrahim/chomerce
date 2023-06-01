const fetcher = (...args: [any]) => fetch(...args).then((res) => res.json());
import useSWR from "swr";

function useProduct(id: string | any) {
  const { data, error, isLoading } = useSWR(
    `/api/products/product?id=${id}`,
    fetcher
  );

  return {
    product: data,
    isLoading,
    isError: error,
  };
}
function useProducts() {
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
function useCatgorie(name: string | any) {
  const { data, error, isLoading } = useSWR(
    `/api/products/search?ctg=${name.toLowerCase()}`,
    fetcher
  );

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
function useLastest() {
  const { data, error, isLoading } = useSWR(`/api/products?new=true`, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
function useQuery(q: string | any) {
  const { data, error, isLoading } = useSWR(
    `/api/products/search?q=${q}`,
    fetcher
  );

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
export { useProduct, useProducts, useCatgorie, useLastest, useQuery };
