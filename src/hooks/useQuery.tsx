import { useEffect, useState } from "react";

export function useQuery<T>(
  queryFunction: () => Promise<any>,
  ...dependencies: any[]
) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setData(await queryFunction());
    } catch (error: any) {
      setError(error);
      setTimeout(() => setError(null), 4000);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, error, isLoading };
}
