import { api } from "./api";

class PostsService {
  getAll() {
    return api.get("/blog/posts/", {
      params: {
        limit: 100,
      },
      headers: {
        Authorization: null,
      },
    });
  }

  addPost(body: any) {
    return api.post("/blog/posts/", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export const postsService = new PostsService();
