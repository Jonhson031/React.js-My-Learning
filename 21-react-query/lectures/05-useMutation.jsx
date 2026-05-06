// ? useMutation()
// Used to send data to server (create, update, delete)
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// * A mutation can only be in one of the following states at any given moment:

// isIdle or status === 'idle' - The mutation is currently idle or in a fresh/reset state
// isPending or status === 'pending' - The mutation is currently running
// isError or status === 'error' - The mutation encountered an error
// isSuccess or status === 'success' - The mutation was successful and mutation data is available
// error - If the mutation is in an error state, the error is available via the error property.
// data - If the mutation is in a success state, the data is available via the data property.

const addUser = (newUser) => {
  return axios.post("/api/users", newUser);
};

export default function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,

    //  To immediately update events and load them
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <button onClick={() => mutation.mutate({ name: "John" })}>Add User</button>
  );
}
