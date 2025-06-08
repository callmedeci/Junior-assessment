import { createContext, use } from 'react';
import { useGetUserDocs } from '../hooks/useGetUserDocs';
import { useAddMessage } from '../hooks/useAddMessage';

/**
 * @module MessagesContext
 * @description Provides a React Context for managing message-related data and actions
 * throughout the application. It centralizes the logic for fetching existing messages
 * and adding new ones, making this data and functionality globally accessible to
 * components wrapped by the `MessagesProvider`.
 */

/**
 * React Context object for messages data and actions.
 * Components will consume this context to get access to `messages`, `addMessage`,
 * `isLoading`, and `isAdding`.
 */
const MessagesContext = createContext(null);

/**
 * A React Context Provider component that encapsulates message fetching and
 * adding logic.
 *
 * It uses the `useGetUserDocs` hook to fetch messages and their loading status (`isLoading`),
 * and the `useAddMessage` hook to provide message submission functionality and its
 * pending status (`isAdding`). These values are then made available to all child components
 * through the `MessagesContext`.
 */
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

/**
 * A custom hook to consume the `MessagesContext`.
 *
 * This hook simplifies accessing the message data and actions from the context.
 * It also includes a check to ensure the hook is used within a `MessagesProvider`,
 * throwing an error if it's used outside.
 */
export function useMessagesContext() {
  const context = use(MessagesContext);

  if (!context) throw new Error('hook used outside the provider!');

  return context;
}

export default MessagesProvider;
