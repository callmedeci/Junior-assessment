import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMessage as addMessageApi } from '../utils/data-service';

/**
 * A custom React hook for adding a new message using React Query's `useMutation`.
 *
 * This hook handles the asynchronous process of sending a message to the backend
 * and automatically invalidates the 'messages' query cache upon successful submission,
 * ensuring that the UI reflects the latest list of messages.
 */

export function useAddMessage() {
  const queryClient = useQueryClient();

  const { isPending, mutate: addMessage } = useMutation({
    mutationFn: (message) => addMessageApi(message),

    onSuccess() {
      // Invalidate the 'messages' query to trigger a refetch of the message list.
      queryClient.invalidateQueries(['messages']);
    },
  });

  return { isPending, addMessage };
}
