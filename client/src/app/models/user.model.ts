export interface UserServiceUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  state: number;
  role: string;
  gender: string;
  _id: string;
  profilePicture: string;
  dateOfBirth: { date: number; month: number; year: number };
  discord?: {
    username: string;
    discriminator: string;
  };
}
