import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import Lab1 from "./page/Lab1";
import Lab2 from "./page/Lab2";
import Lab3 from "./page/Lab3";
import StoryForm from "./page/Lab4";
import StoryList from "./page/Lab5";
import EditForm from "./page/Lab6";



function App() {

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/listUser" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <Routes>
          <Route path="/edit/:id" element={<EditForm/>}></Route>
        </Routes>
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>
            <Form onFinish={onFinish}>
              <Form.Item label="username" name={"username"}>
                <Input placeholder="nhập tên"/>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer>Footer</Footer>
        </Layout> */}
        {/* <Lab1/> */}
        {/* <Lab2/> */}
        {/* <Lab3/> */}
        {/* <StoryForm/> */}
        {/* <EditForm /> */}
        <StoryList />
      </div>
      <Toaster />
    </>
  );
}

export default App;
