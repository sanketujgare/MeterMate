import { UserResponcesI, userSchemaI } from "../users/user.types";

export interface authResponcesI extends UserResponcesI {}
export interface CredentialsI
  extends Pick<userSchemaI, "username" | "password"> {}
export interface permissionsI {
  boardAdmin: string[];
  boardMember: string[];
  superAdmin: string[];
  supervisor: string[];
  fieldStaff: string[];
  customer: string[];
}

export const permissions: permissionsI = {
  boardAdmin: [
    "createBoardMember",
    "viewAllCustomers",
    "deleteCustomer",
    "assignMeter",
    "updateCustomer",
    "configureServices",
    "uploadBulk",
    "createCustomer",
    "viewDeleteCustomers",
    "getTotalCustomersCount",
    "viewCustomer",
    "viewMeter",
    "searchCustomers",
  ],
  boardMember: [
    "viewAllCustomers",
    "deleteCustomer",
    "assignMeter",
    "updateCustomer",
    "createCustomer",
    "viewDeletedCustomers",
    "viewCustomer",
    "configureServices",
    "viewMeter",
    "searchCustomers",
  ],
  superAdmin: [
    "searchEmployees",
    "searchCustomers",
    "viewAllCustomer",
    "viewAllEmployees",
    "getTotalCustomersCount",
    "getTotalEmployeeCount",
    "createEmployee",
    "updateEmployee",
    "viewCustomer",
    "viewEmployee",
    "viewAllBoards",
    "deleteBoard",
    "viewMeter",
  ],
  supervisor: [
    "viewAllCustomer",
    "viewAllEmployees",
    "viewTickets",
    "updateTickets",
  ],
  fieldStaff: ["viewAllCustomers", "viewPendingReadings", "uploadReadings"],
  customer: ["viewBills", "raiseticket"],
};

export type Role =
  | "boardAdmin"
  | "boardMember"
  | "superAdmin"
  | "supervisor"
  | "fieldStaff"
  | "customer";
export const roles: Role[] = [
  "boardAdmin",
  "boardMember",
  "superAdmin",
  "supervisor",
  "fieldStaff",
  "customer",
];
