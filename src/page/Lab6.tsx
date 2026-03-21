
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Form, Input, Button } from 'antd'
import axios from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditStory() {
    const [form] = Form.useForm();
    const { id } = useParams();
    const qc = useQueryClient();
    const nav = useNavigate();


    const { data, isLoading } = useQuery({
        queryKey: ["Story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        }
    })

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data);
        }
    }, [data, form])

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.put(`http://localhost:3000/stories/${id}`, values);
            return res.data
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["stories"] });
            toast.success("Cập nhật thành công");
            nav("/")
        },
        onError: () => {
            toast.error("Cập nhật thất bại");
        }
    })

    const onFinish = (values: any) => {
        mutate(values)

    }
    return (
        <Form onFinish={onFinish} layout='vertical' form={form} disabled={isLoading}>
            <Form.Item label="Tên" name="title"
                rules={
                    [{ required: true, message: "Không được bỏ chống" }]
                }
            >
                <Input />
            </Form.Item>
            <Form.Item label="Tác giả" name="author"
                rules={
                    [{ required: true, message: "Không được bỏ chống" }]
                }
            >
                <Input />
            </Form.Item>
            <Form.Item label="Ảnh" name="image"
                rules={
                    [{ required: true, message: "Không được bỏ chống" }]
                }>
                <Input />
            </Form.Item>
            <Button htmlType="submit" loading={isPending}>Submit</Button>
        </Form>
    )
}

export default EditStory