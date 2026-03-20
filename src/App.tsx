import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import StoryForm from "./page/Lab4";
import { StoryList } from "./page/Lab5";
// import { Layout } from "antd";
// import { Form, Input, Button } from "antd";

// const { Header, Content, Footer } = Layout;
function App() {

  // const onFinish = (value: any) => {
  //   console.log(value);

  // }
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
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
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* <Button type="primary">Click Me</Button>
        <Button type="default">Click Me</Button>
        <Button type="dashed">Click Me</Button>
        <Button type="link">Click Me</Button>
        <Button type="text">Click Me</Button> */}
        {/* <Layout>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>

            <Form onFinish={onFinish}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Nhập email" }]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer>Footer</Footer>
        </Layout> */}


        <Routes>
          <Route path="/" element={<StoryList />} />
          <Route path="/add" element={<StoryForm />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
