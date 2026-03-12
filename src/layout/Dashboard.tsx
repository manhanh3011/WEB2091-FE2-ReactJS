import { Button, Input, Layout, Menu } from "antd"
import { Form } from "antd"
import { Link } from "react-router-dom"


const {Header, Content, Footer, Sider} = Layout
function Dashboard() {
  return (
    <div>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', label: <Link to="#">Dashboard</Link> },
              { key: '2', label: <Link to="/listUser">Danh sách User</Link> },
              { key: '3', label: <Link to="#">Thêm mới</Link> },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ fontSize: 20, backgroundColor: 'transparent' }}>
            Header
          </Header> 
          <Content style={{ margin: '0 16px', padding: 20 }}>         
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
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design © Created by Ant UED
          </Footer>
        </Layout>
          
        </Layout>
    </div>
  )
}

export default Dashboard