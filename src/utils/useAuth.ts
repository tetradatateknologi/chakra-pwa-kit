import { v4 as uuidv4 } from "uuid";

const getRandomId = () => {
  return uuidv4();
};

export const useAuth = {
  getRandomId,
};
