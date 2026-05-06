// ? Optimistic Updates
// * Update the UI before the backeend confirms the change.
// * Roll back if the mutation fails

import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: addTodo,

  // * 1. Optimistic update
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ["todos"] });

    const previousTodos = queryClient.getQueryData(["todos"]);

    queryClient.setQueryData(["todos"], (old = []) => [
      ...old,
      { ...newTodo, id: Date.now() }, // temporary ID
    ]);

    return { previousTodos };
  },

  // * 2. Rollback on error
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(["todos"], context.previousTodos);
  },

  // * 3. Refetch to sync with server. Called when mutation is done no matter if it's succeded or failed
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});
