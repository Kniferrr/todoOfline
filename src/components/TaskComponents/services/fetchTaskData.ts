import { TaskInterface } from "../types/typesTaskData";

const ApiUrl = "http://localhost:3002/";

type methods = "GET" | "POST" | "PATCH" | "DELETE";

const requestOptions = <T>(requestBody: T, method: methods) => {
  const createRequestOptions = {
    method,
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
    const CreateTaskOptions = requestOptions(
      {
        task: newTask,
        completed: false,
      },
      "POST"
    );
    await fetch(`${ApiUrl}task/${username}`, CreateTaskOptions).then((res) =>
      res.json()
    );
  } catch (error) {
    throw error;
  }
};

export const DeleteTaskById = async (username: string, taskIndex: string) => {
  try {
    const CreateTaskOptions = requestOptions(
      {
        taskIndex: taskIndex,
      },
      "DELETE"
    );
    await fetch(`${ApiUrl}tasks/${username}`, CreateTaskOptions).then((res) =>
      res.json()
    );
  } catch (error) {
    throw error;
  }
};

export const completeTaskById = async (username: string, taskIndex: string) => {
  try {
    const CreateTaskOptions = requestOptions(
      {
        taskIndex: taskIndex,
      },
      "PATCH"
    );
    await fetch(`${ApiUrl}tasks/${username}`, CreateTaskOptions).then((res) =>
      res.json()
    );
  } catch (error) {
    throw error;
  }
};
