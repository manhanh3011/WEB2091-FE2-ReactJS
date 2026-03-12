import { Table } from "antd"

// bảng bài 1
const columns1 = [
    {title: "ID", dataIndex: "id"},
    {title: "Name", dataIndex: "name"},
    {title: "Age", dataIndex: "age"},
    {title: "Major", dataIndex: "major"},
];

const data1 = [
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
];

//bảng bài 2
const columns2 = [
    {title: "ID", dataIndex: "id"},
    {title: "ProductName", dataIndex: "name"},
    {title: "Price", dataIndex: "price"},
    {title: "Category", dataIndex: "category"},
];

const data2 = [
    {key: 1, id: 1, name: "Laptop", price: 1000, category: "sản phẩm 1"},
    {key: 2, id: 2, name: "Desktop", price: 2000, category: "sản phẩm 2"},
    {key: 3, id: 3, name: "Chuột", price: 150, category: "sản phẩm 3"},
    {key: 4, id: 4, name: "Bàn phím", price: 180, category: "sản phẩm 4"},
    {key: 5, id: 5, name: "Lót chuột", price: 50, category: "sản phẩm 5"},

]

//bảng bài 3
const columns3 = [
    {title: "ID", dataIndex: "id"},
    {title: "Name", dataIndex: "name"},
    {title: "Email", dataIndex: "email"},
    {
        title: "Status",
        dataIndex: "status",
        render: (status) => (
            <span style={{color: status === "active" ? "green" : "red"}}>{status} </span>
        )
    },
    {
        title: "Action",
        render: (_, record) => (  
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        ),
    }
];

const data3 = [
    {key: 1, id: 1, name: "anhtm", email: "manhanh123@gmail.com", status: "active"},
    {key: 2, id: 2, name: "hung", email: "hung0707@gmail.com", status: "inactive"}

]

function Lab2() {
  return (
    <div>
        <Table columns={columns1} dataSource={data1} pagination={false} />
        <Table columns={columns2} dataSource={data2} pagination={{pageSize: 3}} />
        <Table columns={columns3} dataSource={data3} pagination={false} />
    </div>
  )
}

export default Lab2