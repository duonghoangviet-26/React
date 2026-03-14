import { Form, Input, Button, InputNumber, Select } from "antd";
import { useState } from "react";
function Lab3() {
    const [content, setContent] = useState<any>(null);
    const onFinish = (value: any) => {
        console.log(value);
        setContent(value)
    }
    return (
        <div>
            {/* form đăng nhập */}
            <div>

                <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                    <h1 className="text-3xl text-center">Form Login</h1>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={
                            [{ required: true, message: "Vui lòng nhập email" }]}>
                        <Input placeholder="Nhập Email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Password" }]}>
                        <Input placeholder="Nhập Password" />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType="submit" type="primary">Login</Button>
                    </Form.Item>
                </Form>
            </div>


            {/* form đăng kí */}
            <div>
                <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                    <h1 className="text-3xl text-center">Form Đăng kí người dùng</h1>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Name" }]}>
                        <Input placeholder="Nhập Name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={
                            [{ required: true, message: "Vui lòng nhập email" }]}>
                        <Input placeholder="Nhập Email" />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={
                            [{ required: true, message: "Vui lòng nhập SĐT" }]}>
                        <Input placeholder="Nhập SĐT" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Password" },
                            { min: 5, message: "Mật khẩu tối thiểu 6 kí tự" }
                            ]}>
                        <Input placeholder="Nhập Password" />
                    </Form.Item>

                    <Form.Item
                        label="rePassword"
                        name="rePassword"
                        rules={
                            [{ required: true, message: "Vui lòng nhập lại Password" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value === getFieldValue("password")) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("Mật khẩu không khớp");
                                },
                            }),
                            ]}>
                        <Input placeholder="Nhập lại Password" />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType="submit" type="primary">Đăng Kí</Button>
                    </Form.Item>
                </Form>
            </div>



            {/* form thêm sản phẩm */}
            <div>
                <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                    <h1 className="text-3xl text-center">Form Thêm sản phẩm</h1>
                    <Form.Item
                        label="Tên"
                        name="ten"
                        rules={
                            [{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}>
                        <Input placeholder="Nhập Tên sản phẩm" />
                    </Form.Item>

                    <Form.Item
                        label="Giá"
                        name="gia"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Giá sản phẩm" },
                            {
                                type: "number",
                                min: 1,
                                message: "Giá phải lớn hơn 0"
                            }
                            ]}>
                        <InputNumber placeholder="Nhập giá" />
                    </Form.Item>

                    <Form.Item
                        label="Số lượng"
                        name="soluong"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Số lượng sản phẩm" },
                            {
                                type: "number",
                                min: 1,
                                message: "Số lượng phải lớn hơn 0"
                            }
                            ]}>
                        <InputNumber placeholder="Nhập Số lượng sản phẩm" />
                    </Form.Item>

                    <Form.Item
                        label="Mô tả"
                        name="mota"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Mô tả sản phẩm" }]}>
                        <Input placeholder="Nhập Mô tả sản phẩm" />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType="submit" type="primary">Login</Button>
                    </Form.Item>
                </Form>
            </div>




            <div>
                {/* form thêm bài viết */}
                <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
                    <h1 className="text-3xl text-center">Form Thêm Bài Viết</h1>

                    <Form.Item
                        label="Title"
                        name="title"
                        rules={
                            [{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
                        <Input placeholder="Nhập tiêu đề bài viết" />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
                    >
                        <Select
                            placeholder="Chọn danh mục"
                            options={[
                                { value: "hot", label: "Hot" },
                                { value: "trungbinh", label: "Trung Bình" },
                                { value: "thap", label: "Thấp" }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Slug"
                        name="slug"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Slug" }]}>
                        <Input placeholder="Nhập Slug" />
                    </Form.Item>

                    <Form.Item
                        label="Content"
                        name="content"
                        rules={
                            [{ required: true, message: "Vui lòng nhập Content" }]}>
                        <Input placeholder="Nhập Content" />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="image"
                        rules={
                            [{ required: true, message: "Vui lòng nhập đường dẫn ảnh" }]}>
                        <Input placeholder="Nhập đường dẫn ảnh" />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType="submit" type="primary">Login</Button>
                    </Form.Item>

                </Form>
                {content && (
                    <div>
                        <h3>Dữ liệu đã submit:</h3>
                        <p>Title: {content.title}</p>
                        <p>Category: {content.category}</p>
                        <p>Slug: {content.slug}</p>
                        <p>Content: {content.content}</p>
                        <img src={content.image} width="150" />
                    </div>
                )}
            </div>

        </div >
    )
}

export default Lab3