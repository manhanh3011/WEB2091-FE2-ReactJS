import { Table } from "antd"

const colums = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
    },
    {
        title: "Major",
        dataIndex: "major",
    },
];

const data = [
    {
        key: 1,
        id: 1,
        name: "Nam",
        age: 20,
        major: "IT"
    },
    {
        key: 2,
        id: 2,
        name: "Linh",
        age: 25,
        major: "Business"
    },
    {
        key: 3,
        id: 3,
        name: "Hà",
        age: 19,
        major: "Design"
    },
]

function Lab2() {
  return (
    <div>
        <Table columns={colums} dataSource={data}/>
    </div>
  )
}

export default Lab2