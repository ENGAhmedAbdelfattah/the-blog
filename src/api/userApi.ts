import type { User } from "@/types/user";

const baseURLUsers = "https://jsonplaceholder.typicode.com/users";
const getUser = async (userId: number | undefined): Promise<User> => {
  try {
    const response = await fetch(`${baseURLUsers}/${userId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the GET request:", error);
    throw error;
  }
};

export { getUser };
