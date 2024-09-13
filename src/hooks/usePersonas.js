import useApi from './useApi';

export default function usePersonas () {
  const { data, error, isLoading } = useApi(`/personas`);
 
  return {
    personas: data,
    isLoading,
    isError: error
  }
}