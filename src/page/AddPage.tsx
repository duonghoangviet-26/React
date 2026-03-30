import { useMutation } from "@tanstack/react-query";
import { Button, Form, Select } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function AddPage() {
    const nav = useNavigate();

    const { mutate } = useMutation({
        mutationFn: async (values) => {
            const res = await axios.post(`http://localhost:3000/courses`, values);
            return res.data;
        },
        onSuccess: () => {
            nav("/list");
            toast.success("Thêm thành công")
        }
    })

    const OnFinish = (values: any) => {
        mutate(values);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>
            <Form layout="vertical" onFinish={OnFinish}>
                <Form.Item label="Tiêu đề" name="title"
                    rules={[
                        { required: true, message: "Không được để chống" }
                    ]}

                >
                    <input type="text" placeholder="Nhập vào nội dung" />
                </Form.Item>

                <Form.Item label="Thời Lượng" name="duration" rules={[
                    { required: true, message: "Không được để chống" }
                ]}>
                    <input type="number" placeholder="Nhập vào nội dung" />
                </Form.Item>

                <Form.Item label="Đường dẫn ảnh" name="thumbnail" rules={[
                    { required: true, message: "Không được để chống" }
                ]}>
                    <input type="text" placeholder="Nhập vào nội dung" />
                </Form.Item>

                <Form.Item label="Danh mục" name="category" rules={[
                    { required: true, message: "Không được để chống" }
                ]}>
                    <Select placeholder="Chọn danh mục" options={[
                        { label: "JS", value: "Js" },
                        { label: "PHP", value: "PHP" }
                    ]} />
                </Form.Item>


                <Button htmlType="submit" >Submit</Button>
            </Form>
        </div>
    );
}

export default AddPage;
