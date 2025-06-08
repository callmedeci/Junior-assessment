import { createContext, use } from 'react';
import { useGetUserDocs } from '../hooks/useGetUserDocs';
import { useAddMessage } from '../hooks/useAddMessage';

const MessagesContext = createContext(null);

function MessagesProvider({ children }) {
  const { messages, isPending: isLoading } = useGetUserDocs();
  const { addMessage, isPending: isAdding } = useAddMessage();

  return (
    <MessagesContext.Provider
      value={{ messages, addMessage, isLoading, isAdding }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

export function useMessagesContext() {
  const context = use(MessagesContext);

  if (!context) throw new Error('hook used outside the provider!');

  return context;
}

export default MessagesProvider;
