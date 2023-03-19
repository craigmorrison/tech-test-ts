import usersData from './data/users.json';
import postsData from './data/posts.json';
import commentsData from './data/comments.json';
import type { User, Post, Comment } from './types';

class DataService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(usersData);
  }

  getPosts(): Promise<Post[]> {
    return Promise.resolve(postsData);
  }

  getComments(): Promise<Comment[]> {
    return Promise.resolve(commentsData);
  }
}

export default DataService;
