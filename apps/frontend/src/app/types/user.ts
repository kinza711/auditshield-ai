export type UserRole = "hr" | "auditor";
export type UserStatus = "active" | "pending" | "disabled";
export type UserFilter = "all" | "hr" | "auditor" | "pending";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  status: UserStatus;
}

export interface InviteValues {
  name: string;
  email: string;
  role: UserRole;
  departmentValue: string;
}