# Electricity Board Customer Management

## Introduction

### Purpose

This document describes the requirements for the Electricity Board Management application, a web-based solution for managing the customers of different electricity boards.

## Project Description

### Product Perspective

This is a web-based application designed to manage the customers of various electricity boards.

### Product Features

1. **User Authentication**: Role-based control for different types of users.
2. **Customer Data Management**: Upload and manage customer data.
3. **Meter Reading Collection**: Collect and upload meter reading data.
4. **Bill Generation**: Generate bills and send emails.
5. **Complaint and Issue Management**: Handle customer complaints and issues.
6. **Statistics and Performance Monitoring**:
   - Boards can view total revenue and total units consumed.
   - Supervisors can monitor field staff performance.

### User Classes

- **Board**
  - **Board Admin**: Can upload customer data, view total revenue, total units consumed, and perform all operations on board data.
  - **Board Member**: Can add, update, and delete customer data.
- **Application**
  - **Superadmin**: Can perform all operations on any data.
  - **Supervisor**: Can monitor performance.
  - **Field Staff**: Handles assigned tasks.
- **Customer**: Can view bills and raise complaints.

## System Features

### Functional Requirements

1. User Authentication
2. Customer Management
3. Meter Reading Data Upload
4. Bill Management
5. Complaints Management
6. Performance Monitoring

### Non-Functional Requirements

- To be defined as per project needs (e.g., performance, security, scalability).

### Interface Requirements

1. **Login Page**
2. **Dashboard Pages for Different Roles**
   - Superadmin Dashboard
   - Board Admin Dashboard
   - Supervisor Dashboard
   - Field Staff Dashboard
3. **Customer Management Pages**
   - Board Admin Page
   - Board Member Page
   - Superadmin Page
4. **Complaint Management Page**
   - Supervisor Page
5. **Bill Management Page**
   - Field Staff Page
6. **Customer Page**
   - View Bill and Raise Complaint Page
7. **Performance Monitoring and Statistics Page**

## API Endpoints

### Authentication

- `POST /api/login`: Authenticate users.

### Dashboard Pages

- **Superadmin Dashboard**:
  - `GET /api/users`
- **Board Admin Dashboard**:
  - `GET /api/users`
- **Supervisor Dashboard**:
  - `GET /api/staff`
  - `GET /api/users`
- **Field Staff Dashboard**:
  - `POST /api/meter`

### Customer Management Pages

- **Board Admin Page**:
  - `GET /api/boards`
  - `POST /api/customers`
  - `POST /api/customers/:id`
  - `PUT /api/customers/:id`
- **Board Member Page**:
  - `POST /api/customers`
  - `PUT /api/customers/:id`
  - `DELETE /api/customers`
  - `POST /api/customers/:id` (restore)
- **Superadmin Page**:
  - `GET /api/boards`
  - `GET /api/customers`
  - `POST /api/customers`

### Complaint Management Page

- **Supervisor Page**:
  - `GET /api/complaints`
  - `PUT /api/complaints/:id`

### Bill Management Page

- **Field Staff Page**:
  - `GET /api/customers`
  - `POST /api/meter`

### Customer Page

- **View Bill and Raise Complaint Page**:
  - `GET /api/bills`
  - `POST /api/complaints`

### Performance Monitoring and Statistics Page

- **Board Admin**:
  - `GET /api/customers`
- **Superadmin**:
  - `GET /api/boards`
  - `GET /api/customers`
- **Supervisor**:
  - `GET /api/users`

## Pages and Their Functionality

1. **Login Page**

   - Takes login credentials (username, password).
   - Submits form via `POST /api/login`.

2. **Superadmin Dashboard**

   - Navigation bar with tabs: Boards, Consumers, Reports.
   - Displays total boards, total consumers, total revenue.
   - Boards tab: View, add, edit, delete boards.
   - Consumers tab: View consumers by board, view bill status.

3. **Board Admin Dashboard**
   - Manage customer data.
   - View total revenue and bills.
4. **Supervisor Dashboard**

   - Monitor field staff performance.
   - View and manage customer bills and complaints.

5. **Field Staff Dashboard**

   - List of assigned customers.
   - Upload meter reading data.

6. **Customer Management Pages**

   - **Board Admin Page**: Upload and manage customer data, approve restore requests.
   - **Board Member Page**: Add, update customer data, send restore requests.
   - **Superadmin Page**: Manage all users and boards.

7. **Complaint Management Page**

   - **Supervisor Page**: View, assign, and resolve complaints.

8. **Bill Management Page**

   - **Field Staff Page**: Upload meter reading data.

9. **Customer Page**

   - **View Bill and Raise Complaint Page**: View bills, raise complaints.

10. **Performance Monitoring and Statistics Page**
    - **Board Admin**: View total revenue, units consumed, bill paid.
    - **Superadmin**: View all boards' performance, staff performance, total bills.
    - **Supervisor**: View staff performance, total bill generated.

```

```
