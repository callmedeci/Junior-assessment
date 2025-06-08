import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMessage as addMessageApi } from '../utils/data-service';

export function useAddMessage() {
  const queryClient = useQueryClient();

  const { isPending, mutate: addMessage } = useMutation({
    mutationFn: (message) => addMessageApi(message),

    onSuccess() {
      console.log('successfull');
      queryClient.invalidateQueries(['messages']);
    },
  });

  return { isPending, addMessage };
}
