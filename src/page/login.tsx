import { Form, Input, Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "../stores/useAuthStores";


const LoginPage = () => {
    const {setUser} = useAuthStore();

    const {mutate} = useMutation({
        mutationFn: async (values) => {
            const res = await axios.post(`http://localhost:3000/login` , values);
            return res.data;
        },
        onSuccess: (data) => {
            toast.success("Dăng kí thành công");
            setUser({
                user: data.user,
                token : data.accessToken
            })
        }
    })


    const submitForm = (values: any) => {
        mutate(values);
    }

return (
    <div style={{ maxWidth: 300, margin: "50px auto" }}>
      <h2>Register</h2>

      <Form layout="vertical" onFinish={submitForm} >
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

export default LoginPage;