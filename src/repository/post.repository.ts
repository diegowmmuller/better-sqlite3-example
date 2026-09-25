import db from "../database.js";
import type { Post } from "../types/Post.js";

export const createPost = (post: Post) => {
  const statement = db.prepare(`INSERT INTO posts (title, content, user_id) values (?, ?, ?)`);
  return statement.run(post.title, post.content, post.user_id);
};

export const updatePost = (post: Post) => {
  const statement = db.prepare(`UPDATE posts SET title = ?, content = ? where id = ?`);
  return statement.run(post.title, post.content, post.id);
};

export const getPosts = () => {
  const statement = db.prepare(`SELECT * FROM posts`);
  return statement.all();
};

export const getPost = (id: number) => {
  const statement = db.prepare(`SELECT * FROM posts WHERE id = ?`);
  return statement.get(id);
};

export const deletePost = (id: number) => {
  const statement = db.prepare(`DELETE FROM posts WHERE id = ?`);
  return statement.run(id);
};
