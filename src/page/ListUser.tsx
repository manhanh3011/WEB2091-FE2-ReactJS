import { Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },

];

const data = [
  { key: 1, name: "anhtm", email: "user123@gmail.com", role: "user" },
  { key: 2, name: "Nguyen Van Hung", email: "admin123@gmail.com", role: "admin" },
];

function ListUser() {
  return (
    <div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ListUser