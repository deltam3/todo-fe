export interface TodoItemType {
  id: number;
  content: string;
  done: boolean;
  userNick: string;
  categoryName: string;
}

export interface User {
  email: string;
  nick: string;
  password: string;
  admin?: boolean;
}
