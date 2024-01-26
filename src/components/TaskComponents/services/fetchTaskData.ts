import { TaskInterface } from "../types/typesTaskData";

const ApiUrl = "http://localhost:3002/";

const requestOptions = <T>(requestBody: T) => {
  const createRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  return createRequestOptions;
};

export const FetchTaskByUsername = async (
  username: string
): Promise<TaskInterface[]> => {
  try {
    const response = await fetch(`${ApiUrl}tasks/${username}`).then((res) =>
      res.json()
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const CreateTaskByUsername = async (
  username: string,
  newTask: string
) => {
  try {
    const CreateTaskOptions = requestOptions({
      task: newTask,
      completed: false,
    });
    await fetch(`${ApiUrl}task/${username}`, CreateTaskOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Ответ сервера:", data);
      });
  } catch (error) {
    throw error;
  }
};
