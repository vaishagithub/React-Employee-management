import axios from "axios";

const BASE_URL = "https://dummyjson.com/users";

export const getEmployees = async () => {
  const response = await axios.get(BASE_URL);

  return response.data.users.map((employee: any) => ({
    ...employee,
    status: "Active", // Default status
  }));
};
