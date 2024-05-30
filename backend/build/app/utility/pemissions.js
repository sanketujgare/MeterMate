"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionsToGetTotalEmployeeCount = exports.permissionsToGetTotalCustomersCount = exports.permissionsToUploadBulk = exports.permissionsToConfigureServices = exports.permissionsToCreateBoardMember = exports.permissionsToUpdateCustomers = exports.permissionsTosearchCustomer = exports.permissionsToSearchEmp = exports.permissionsToViewMeter = exports.permissionsToDeleteEmployee = exports.permissionsToDeleteBoard = exports.permissionsToCreateBoard = exports.permissionsToAssignMeter = exports.permissionsToViewDeleted = exports.permissionsToDeleteUser = exports.permissionsToViewAllEmployees = exports.permissionsToViewAllCustomers = exports.permissionsToViewUser = exports.permissionsToCreate = exports.roles = exports.permissions = void 0;
exports.permissions = {
    boardAdmin: [
        "createBoardMember",
        "viewAllCustomers",
        "deleteCustomer",
        "assignMeter",
        "updateCustomer",
        "configureServices",
        "uploadBulk",
        "createCustomer",
        "viewDeletedCustomers",
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
        "deleteEmployee",
        "viewAllCustomer",
        "viewAllEmployees",
        "getTotalCustomersCount",
        "getTotalEmployeeCount",
        "createEmployee",
        "updateEmployee",
        "viewCustomer",
        "viewEmployee",
        "viewAllBoards",
        "createBoard",
        "deleteBoard",
        "viewMeter",
    ],
    supervisor: [
        "searchEmployees",
        "viewAllCustomer",
        "viewAllEmployees",
        "viewTickets",
        "updateTickets",
    ],
    fieldStaff: ["viewAllCustomers", "viewPendingReadings", "uploadReadings"],
    customer: ["viewBills", "raiseticket"],
};
exports.roles = [
    "boardAdmin",
    "boardMember",
    "superAdmin",
    "supervisor",
    "fieldStaff",
    "customer",
];
exports.permissionsToCreate = [
    "createBoardMember",
    "createCustomer",
    "createEmployee",
];
exports.permissionsToViewUser = ["viewCustomer", "viewEmployee"];
exports.permissionsToViewAllCustomers = ["viewAllCustomers"];
exports.permissionsToViewAllEmployees = ["viewAllEmployees"];
exports.permissionsToDeleteUser = ["deleteCustomer", "deleteEmployee"];
exports.permissionsToViewDeleted = ["viewDeletedCustomers"];
exports.permissionsToAssignMeter = ["assignMeter"];
exports.permissionsToCreateBoard = ["createBoard"];
exports.permissionsToDeleteBoard = ["deleteBoard"];
exports.permissionsToDeleteEmployee = ["deleteEmployee"];
exports.permissionsToViewMeter = ["viewMeter"];
exports.permissionsToSearchEmp = ["searchEmployees"];
exports.permissionsTosearchCustomer = ["viewAllCustomer"];
exports.permissionsToUpdateCustomers = ["updateCustomer"];
exports.permissionsToCreateBoardMember = ["createBoardMember"];
exports.permissionsToConfigureServices = ["configureServices"];
exports.permissionsToUploadBulk = ["uploadBulk"];
exports.permissionsToGetTotalCustomersCount = ["getTotalCustomersCount"];
exports.permissionsToGetTotalEmployeeCount = ["getTotalEmployeeCount"];
exports.default = {
    permissionsToAssignMeter: exports.permissionsToAssignMeter,
    permissionsToCreate: exports.permissionsToCreate,
    permissionsToDeleteUser: exports.permissionsToDeleteUser,
    permissionsToViewAllCustomers: exports.permissionsToViewAllCustomers,
    permissionsToViewDeleted: exports.permissionsToViewDeleted,
    permissionsToViewUser: exports.permissionsToViewUser,
    permissionsToCreateBoard: exports.permissionsToCreateBoard,
};
