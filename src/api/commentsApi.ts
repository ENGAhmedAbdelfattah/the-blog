import type { Comments } from "@/types/comments";

const baseURLcomments = "https://jsonplaceholder.typicode.com/comments";
const getComments = async (postId: number | undefined): Promise<Comments[]> => {
  try {
    const response = await fetch(`${baseURLcomments}?postId=${postId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Comments[] = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the GET request:", error);
    throw error;
  }
};

export { getComments };
