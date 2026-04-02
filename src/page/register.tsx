import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterPage = () => {

    const nav = useNavigate();

    const {mutate} = useMutation({
        mutationFn: async (values) => {
            const res = await axios.post(`http://localhost:3000/register` , values);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Dăng kí thành công");
            nav("/login");
        },
        onError:() => {
            toast.error("Lỗi k đăng kí được")
        }
    })


    const submitForm = (values: any) => {
        mutate(values);
    }

return (
    <div style={{ maxWidth: 300, margin: "50px auto" }}>
      <h2>Register</h2>

      <Form layout="vertical" onFinish={submitForm} >
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;