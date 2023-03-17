import DataService from './dataService';

class UserService {
  constructor(private dataService: DataService) {}

  getUsersWithPopularPosts(commentThreshold: number): Promise<any[]> {
    return Promise.resolve([]);
  }
}

export default UserService;
