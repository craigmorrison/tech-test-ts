import DataService from './dataService';
import UserService from './userService';

function main() {
  const dataService = new DataService();
  const userService = new UserService(dataService);
  const threshold = 10;
  userService.getUsersWithPopularPosts(threshold).then((users) => {
    console.log(
      `There are ${users.length} users with more than ${threshold} comments.`
    );
    console.table(users);
  });
}

main();
