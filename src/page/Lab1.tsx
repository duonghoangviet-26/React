import { Form, Input, Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Table } from "antd";
import { Modal } from "antd";
import { useState } from "react";


const { Header, Content, Footer } = Layout;
function Lab1() {
    const [open, setOpen] = useState(false);
    const onFinish = (value: any) => {
        console.log(value);
    }

    const columns = [
        { title: "Name", dataIndex: "name" },
        { title: "Email", dataIndex: "email" },
        { title: "Role", dataIndex: "role" },
    ]


    const data = [
        { key: 1, name: "Dương", email: "dương@gmail.com", role: "user" },
        { key: 2, name: "Nam", email: "nam@gmail.com", role: "user" },
        { key: 3, name: "Ban", email: "ban@gmail.com", role: "user" },
    ]

    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Header style={{ color: "white" }}>
                    Header
                </Header>

                <Layout>
                    <Sider style={{ background: "#eee", padding: 20 }}>
                        Sidebar
                    </Sider>

                    <Content style={{ padding: 20 }}>
                        <div>Form</div>
                        <Form onFinish={onFinish}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, message: "Nhập email" }]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>

                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: "Nhập Name" }]}
                            >
                                <Input placeholder="Name" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[{ required: true, message: "Nhập Password" }]}
                            >
                                <Input placeholder="Password" />
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>


                        <div>Danh Sách</div>
                        <Table columns={columns} dataSource={data} />


                        <Button onClick={() => setOpen(true)}>Nhấn vào đây để mở Form Open</Button>
                        <Modal
                            open={open}
                            onCancel={() => setOpen(false)}
                            onOk={() => setOpen(false)}
                        >
                            <Form onFinish={onFinish}>
                                <h1 className="text-2xl text-center">Đây là form nhập thông tin </h1>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, message: "Nhập email" }]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>

                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: "Nhập Name" }]}
                                >
                                    <Input placeholder="Name" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true, message: "Nhập Password" }]}
                                >
                                    <Input placeholder="Password" />
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" type="primary">
                                        Login
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </Content>
                </Layout>

                <Footer style={{ textAlign: "center" }}>
                    Footer
                </Footer>
            </Layout>
        </div>
    )
}

export default Lab1