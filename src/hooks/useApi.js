import useSWR from 'swr';

// Debemos modificar la URL base de nuestro servidor backend en la siguiente línea.
const api_base_url = `http://localhost:8000`;
const fetcher = url => fetch(`${api_base_url}${url}`).then(res => res.json());

const useApi = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher)
  return {
    data,
    isLoading,
    isError: error
  }
}

export default useApi;