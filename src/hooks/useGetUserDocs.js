import { useQuery } from '@tanstack/react-query';
import { getSnapShot } from '../utils/data-service';

/**
 * A custom React hook for fetching user-related documents or messages using React Query's `useQuery`.
 *
 * This hook abstracts the data fetching logic for a collection of 'messages' (or documents, depending on context).
 * It leverages React Query to manage loading states, caching, and automatic refetching,
 * ensuring that your component always displays up-to-date data efficiently.
 */

export function useGetUserDocs() {
  const { isPending, data: messages } = useQuery({
    queryKey: ['messages'],
    queryFn: getSnapShot,
  });

  return { isPending, messages };
}
