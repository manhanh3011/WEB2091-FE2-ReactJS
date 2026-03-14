import { Button, Input, Layout, Menu, Modal, Table } from "antd"
import { Form } from "antd"
import { useState } from "react";

//bai 1
const {Header, Content, Footer, Sider} = Layout

//bai 3
const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },

];

const data = [
  { key: 1, name: "anhtm", email: "user123@gmail.com", role: "user" },
  { key: 2, name: "Nguyen Van Hung", email: "admin123@gmail.com", role: "admin" },
];
function Lab1() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              { key: "1", label: "Dashboard" },
              { key: "2", label: "Danh sách User" },
              { key: "3", label: "Thêm User" },
            ]}
          />
        </Sider>
        
        <Layout>
          <Header style={{ fontSize: 20, backgroundColor: 'transparent' }}>
            Header
          </Header> 
          <Content style={{ margin: '0 16px', padding: 20 }}>
            {/* bài 2 */}         
            {/* form đăng ký */}
            <h1 className="text-4xl font-bold text-center mb-5">Đăng ký</h1>
            <Form>
              <Form.Item label="Name" name={"name"}>
                <Input placeholder="Nhập tên"/>
              </Form.Item>
              <Form.Item label="Email" name={"email"}>
                <Input placeholder="Nhập email"/>
              </Form.Item>
              <Form.Item label="Password" name={"password"}>
                <Input placeholder="Nhập mật khẩu"/>
              </Form.Item>
              <Button className="text-center" htmlType="submit" type="primary">Submit</Button>
            </Form>
            <br /><hr />
            {/* bai 3 */}
            <Table columns={columns} dataSource={data} />

            {/* bài 4*/}
            <Button onClick={() => setOpen(true)} type="primary" style={{ marginBottom: 20 }}>
              Add User
            </Button>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design © Created by Ant UED
          </Footer>

        </Layout>
          {/* modal */}
          <Modal title="Add User" 
                 open={open} 
                 onCancel={() => setOpen(false)}
                 onOk={() => setOpen(false)}>
            <Form >
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Role" name="role">
                <Input placeholder="Admin / User" />
              </Form.Item>

              <Button type="primary">Add</Button>
            </Form>
          </Modal>

      </Layout>
    </div>
  )
}

export default Lab1