import type { Post } from "@/types/post";

const baseURLPosts = "https://jsonplaceholder.typicode.com/posts";
const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(baseURLPosts);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the GET request:", error);
    throw error;
  }
};

const getPost = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`${baseURLPosts}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the GET request:", error);
    throw error;
  }
};

const getRecentPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${baseURLPosts}?_start=0&_limit=4`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the GET request:", error);
    throw error;
  }
};

const getAllNoRecentPosts = async (pageNumber: number): Promise<Post[]> => {
  try {
    const response = await fetch(`${baseURLPosts}?_page=${pageNumber}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post[] = await response.json();
    // if(pageNumber === 1) return data.slice(4);
    return data;
  } catch (error) {
    console.error("There was a problem with the GET request:", error);
    throw error;
  }
};

const addPost = async (post: Post): Promise<void> => {
  try {
    const response = await fetch(baseURLPosts, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const newResource = await response.json();
    console.log("Resource created successfully:", newResource);
  } catch (error) {
    console.error("There was a problem with the POST request:", error);
    throw error;
  }
};

const updatePost = async (post: Post): Promise<void> => {
  try {
    const response = await fetch(`${baseURLPosts}/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const updatedData = await response.json();
    console.log("Data updated successfully:", updatedData);
  } catch (error) {
    console.error("There was a problem with the PUT request:", error);
    throw error;
  }
};

const deletePost = async ({ id }: { id: number }): Promise<void> => {
  try {
    const response = await fetch(`${baseURLPosts}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("Resource deleted successfully.");
  } catch (error) {
    console.error("There was a problem with the DELETE request:", error);
    throw error;
  }
};

export {
  getPosts,
  getPost,
  getRecentPosts,
  getAllNoRecentPosts,
  addPost,
  updatePost,
  deletePost,
};
// export default baseURLPosts;
