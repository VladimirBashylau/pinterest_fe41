import { api } from "./api";

class PostsService {
  getAll(pin: number) {
    return api.get("/blog/posts/", {
      params: {
        limit: 18 + pin,
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
