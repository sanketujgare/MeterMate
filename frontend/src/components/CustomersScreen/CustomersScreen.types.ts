export interface CustomersScreenProps {}
// Customer.types.ts

export interface billsSchema {
  meterId: string;
  date: string;
  unitsConsumed: number;
  isPaid: boolean;
  images: string[];
}

// Customer.ts
export interface meterSchema {
  MeterId: string;
  boardId: string;
  serviceId: string;
  consumerId: string;
  bills: [
    {
      type: string;
      ref: billsSchema[];
      _id: string;
    }
  ];
  isReadingTaken: boolean;
  isActive: boolean;
  balanceAmount: number;
  avgConsumption: number;
}

export type MeterAssignment = {
  meterId: string;
  ref: meterSchema;
};

export type Address = {
  city: string;
  state: string;
  country: string;
};

export type Customer = {
  _id: string;
  firstname: string;
  lastname: string;
  fullname: string;
  username: string;
  password: string;
  email: string;
  role: string;
  profilePic: string;
  empId: string;
  metersAssigned: MeterAssignment[];
  address: Address;
};
// SampleData.ts
export const customers: Customer[] = [
  {
    _id: "1",
    firstname: "John",
    lastname: "Doe",
    fullname: "John Doe",
    username: "johndoe",
    password: "P@ssw0rd!",
    email: "john.doe@example.com",
    role: "admin",
    profilePic:
      "https://cdn-icons-png.freepik.com/256/3237/3237472.png?semt=ais_hybrid",
    empId: "EMP001",
    metersAssigned: [
      {
        meterId: "METER123",
        ref: {
          MeterId: "METER123",
          boardId: "BOARD001",
          serviceId: "SERVICE001",
          consumerId: "CONSUMER001",
          bills: [
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER123",
                  date: "2024-01-15",
                  unitsConsumed: 150,
                  isPaid: true,
                  images: [
                    "http://example.com/images/bill1_1.jpg",
                    "http://example.com/images/bill1_2.jpg",
                  ],
                },
              ],
              _id: "BILL001",
            },
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER123",
                  date: "2024-02-15",
                  unitsConsumed: 200,
                  isPaid: false,
                  images: ["http://example.com/images/bill2_1.jpg"],
                },
              ],
              _id: "BILL002",
            },
          ],
          isReadingTaken: true,
          isActive: true,
          balanceAmount: 120.5,
          avgConsumption: 150.75,
        },
      },
      {
        meterId: "METER123",
        ref: {
          MeterId: "METER123",
          boardId: "BOARD001",
          serviceId: "SERVICE001",
          consumerId: "CONSUMER001",
          bills: [
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER123",
                  date: "2024-01-15",
                  unitsConsumed: 150,
                  isPaid: true,
                  images: [
                    "http://example.com/images/bill1_1.jpg",
                    "http://example.com/images/bill1_2.jpg",
                  ],
                },
              ],
              _id: "BILL001",
            },
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER123",
                  date: "2024-02-15",
                  unitsConsumed: 200,
                  isPaid: false,
                  images: ["http://example.com/images/bill2_1.jpg"],
                },
              ],
              _id: "BILL002",
            },
          ],
          isReadingTaken: true,
          isActive: true,
          balanceAmount: 120.5,
          avgConsumption: 150.75,
        },
      },
    ],
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  },
  {
    _id: "2",
    firstname: "Jane",
    lastname: "Smith",
    fullname: "Jane Smith",
    username: "janesmith",
    password: "SecurePass!2",
    email: "jane.smith@example.com",
    role: "user",
    profilePic:
      "https://cdn-icons-png.freepik.com/256/3237/3237472.png?semt=ais_hybridg",
    empId: "EMP002",
    metersAssigned: [
      {
        meterId: "METER456",
        ref: {
          MeterId: "METER456",
          boardId: "BOARD002",
          serviceId: "SERVICE002",
          consumerId: "CONSUMER002",
          bills: [
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER456",
                  date: "2024-01-20",
                  unitsConsumed: 200,
                  isPaid: false,
                  images: ["http://example.com/images/bill3_1.jpg"],
                },
              ],
              _id: "BILL003",
            },
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER456",
                  date: "2024-02-20",
                  unitsConsumed: 250,
                  isPaid: true,
                  images: [
                    "http://example.com/images/bill4_1.jpg",
                    "http://example.com/images/bill4_2.jpg",
                  ],
                },
              ],
              _id: "BILL004",
            },
          ],
          isReadingTaken: false,
          isActive: true,
          balanceAmount: 80.25,
          avgConsumption: 100.5,
        },
      },
    ],
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA",
    },
  },
  {
    _id: "3",
    firstname: "Alice",
    lastname: "Johnson",
    fullname: "Alice Johnson",
    username: "alicej",
    password: "Alice123!@#",
    email: "alice.johnson@example.com",
    role: "manager",
    profilePic:
      "https://cdn-icons-png.freepik.com/256/3237/3237472.png?semt=ais_hybrid",
    empId: "EMP003",
    metersAssigned: [
      {
        meterId: "METER789",
        ref: {
          MeterId: "METER789",
          boardId: "BOARD003",
          serviceId: "SERVICE003",
          consumerId: "CONSUMER003",
          bills: [
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER789",
                  date: "2024-02-01",
                  unitsConsumed: 180,
                  isPaid: true,
                  images: [
                    "http://example.com/images/bill5_1.jpg",
                    "http://example.com/images/bill5_2.jpg",
                  ],
                },
              ],
              _id: "BILL005",
            },
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER789",
                  date: "2024-03-01",
                  unitsConsumed: 220,
                  isPaid: false,
                  images: ["http://example.com/images/bill6_1.jpg"],
                },
              ],
              _id: "BILL006",
            },
          ],
          isReadingTaken: true,
          isActive: false,
          balanceAmount: 200.0,
          avgConsumption: 250.0,
        },
      },
    ],
    address: {
      city: "Chicago",
      state: "IL",
      country: "USA",
    },
  },
  {
    _id: "4",
    firstname: "Bob",
    lastname: "Brown",
    fullname: "Bob Brown",
    username: "bobbrown",
    password: "BobPass123!",
    email: "bob.brown@example.com",
    role: "user",
    profilePic:
      "https://cdn-icons-png.freepik.com/256/3237/3237472.png?semt=ais_hybrid",
    empId: "EMP004",
    metersAssigned: [
      {
        meterId: "METER321",
        ref: {
          MeterId: "METER321",
          boardId: "BOARD004",
          serviceId: "SERVICE004",
          consumerId: "CONSUMER004",
          bills: [
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER321",
                  date: "2024-02-10",
                  unitsConsumed: 220,
                  isPaid: false,
                  images: ["http://example.com/images/bill7_1.jpg"],
                },
              ],
              _id: "BILL007",
            },
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER321",
                  date: "2024-03-10",
                  unitsConsumed: 250,
                  isPaid: true,
                  images: ["http://example.com/images/bill8_1.jpg"],
                },
              ],
              _id: "BILL008",
            },
          ],
          isReadingTaken: true,
          isActive: true,
          balanceAmount: 50.75,
          avgConsumption: 90.25,
        },
      },
    ],
    address: {
      city: "Houston",
      state: "TX",
      country: "USA",
    },
  },
  {
    _id: "5",
    firstname: "Charlie",
    lastname: "Davis",
    fullname: "Charlie Davis",
    username: "charlied",
    password: "CharlieD123$",
    email: "charlie.davis@example.com",
    role: "user",
    profilePic:
      "https://cdn-icons-png.freepik.com/256/3237/3237472.png?semt=ais_hybrid",
    empId: "EMP005",
    metersAssigned: [
      {
        meterId: "METER654",
        ref: {
          MeterId: "METER654",
          boardId: "BOARD005",
          serviceId: "SERVICE005",
          consumerId: "CONSUMER005",
          bills: [
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER654",
                  date: "2024-02-15",
                  unitsConsumed: 175,
                  isPaid: true,
                  images: ["http://example.com/images/bill9_1.jpg"],
                },
              ],
              _id: "BILL009",
            },
            {
              type: "ObjectId",
              ref: [
                {
                  meterId: "METER654",
                  date: "2024-03-15",
                  unitsConsumed: 225,
                  isPaid: false,
                  images: ["http://example.com/images/bill10_1.jpg"],
                },
              ],
              _id: "BILL010",
            },
          ],
          isReadingTaken: true,
          isActive: true,
          balanceAmount: 30.0,
          avgConsumption: 120.0,
        },
      },
    ],
    address: {
      city: "Phoenix",
      state: "AZ",
      country: "USA",
    },
  },
];

export default customers;
