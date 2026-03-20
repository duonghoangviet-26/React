import { useMutation } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Select } from "antd";

interface category {
    title: string,
    description: string,
    active: boolean,
}

interface story {
    title: string,
    author: string,
    image: string,
    description: string,
    categoryId: number
}

function StoryForm() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)

    const { mutate, isPending } = useMutation({
        mutationFn: async (values: category) => {
            const res = await axios.post(`http://localhost:3000/categories`, values);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Thêm danh mục thành công")
        },
        onError: () => {
            toast.error("Thất bại")
        }
    })


    const onFinishCategory = (values: category) => {
        mutate(values);
    }


    useEffect(() => {
        const getCategories = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:3000/categories`);
                setCategories(res.data)
            } catch (error) {
                toast.error("Thất bại")
            } finally {
                setLoading(false);
            }
        }
        getCategories();
    }, [])


    const {
        mutate: mutateStory,
        isPending: isPendingStory
    } = useMutation({
        mutationFn: async (values: story) => {
            const res = await axios.post(`http://localhost:3000/stories`, values);
            return res.data;
        },
        onSuccess: () => {
            toast.success("Thêm truyện thành công");
        },
        onError: () => {
            toast.error("Thất bại");
        }
    });

    const onFinishStory = (values: story) => {
        mutateStory(values);
    };


    const option = categories.map((item) => ({
        label: item.title,
        value: item.id
    }));
    return (
        <div style={{ display: "flex", gap: 50 }}>
            <Form layout="vertical" onFinish={onFinishCategory} style={{ maxWidth: 400 }}>
                <h2>Thêm danh mục</h2>

                <Form.Item label="Title" name="title"
                    rules={[{ required: true, message: "Nhập tên danh mục" }]}
                >
                    <Input placeholder="Nhập tiêu đề" />
                </Form.Item>

                <Form.Item label="Description" name="description">
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Active"
                    name="active"
                    valuePropName="checked"
                >
                    <Checkbox>Active</Checkbox>
                </Form.Item>

                <Button
                    htmlType="submit"
                    type="primary"
                    loading={isPending}
                >
                    Submit
                </Button>
            </Form>



            <Form layout="vertical" onFinish={onFinishStory} style={{ maxWidth: 500 }}>
                <h2>Thêm truyện</h2>

                <Form.Item
                    label="Tên truyện"
                    name="title"
                    rules={[{ required: true, message: "Nhập tên truyện" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Tác giả" name="author">
                    <Input />
                </Form.Item>

                <Form.Item label="Image URL" name="image">
                    <Input />
                </Form.Item>

                <Form.Item label="Mô tả" name="description">
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Danh mục"
                    name="categoryId"
                    rules={[{ required: true, message: "Chọn danh mục!" }]}
                >
                    <Select
                        placeholder="Chọn danh mục"
                        options={option}
                    // loading={loading}
                    />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isPendingStory}
                >
                    Thêm truyện
                </Button>
            </Form>

        </div>


    )

}

export default StoryForm