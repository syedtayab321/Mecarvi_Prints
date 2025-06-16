
export interface Role {
  id: number;
  name: string;
  permissions: string[];
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "Admin" | "Manager" | "Editor" | "Viewer";
  avatar: string;
}