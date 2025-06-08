import { useQuery } from '@tanstack/react-query';
import { getSnapShot } from '../utils/data-service';

export function useGetUserDocs() {
  const { isPending, data: messages } = useQuery({
    queryKey: ['messages'],
    queryFn: getSnapShot,
  });

  return { isPending, messages };
}
