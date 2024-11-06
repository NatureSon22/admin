// {
//     filename: "Copy of Transaction of Ownership.pdf",
//     date_created: "2022-01-01",
//     contributor: "Jane Doe",
//     date_modified: "2023-05-25",
//     permission: "view",
//     status: "Learned",
//   },

const documentHeaders = [
  {
    header: "Filename",
    accessorKey: "name",
  },
  {
    header: "Date Created",
    accessorKey: "created_at",
  },
  // {
  //   header: "Contributor",
  //   accessorKey: "contributor",
  // },
  {
    header: "Date Last Modified",
    accessorKey: "updated_at",
  },
  // {
  //   header: "Permission",
  //   accessorKey: "permission",
  // },
  {
    header: "Status",
    accessorKey: "status",
  },
];

export { documentHeaders };
