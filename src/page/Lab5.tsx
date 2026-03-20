import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Input, Popconfirm, Table } from "antd";
import axios from "axios";
import { useState } from "react";

export function StoryList() {
    const [key, setKey] = useState("");

    const { data, isLoading } = useQuery({
        queryKey: ["stories"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories`);
            return res.data;
        },
    });
    const qc = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (id: number) =>
            await axios.delete(`http://localhost:3000/stories/${id}`),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["stories"] });
        },
    });

    const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(key.toLowerCase()),
    );

    const columns = [
        {
            title: "Ten truyen",
            dataIndex: "title",
        },
        {
            title: "Tac gia",
            dataIndex: "author",
        },
        {
            title: "Hinh anh",
            dataIndex: "image",
            render: (src: string) => <Image src={src} height={100} />,
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <Popconfirm
                    title="Bạn có muốn xóa không"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => mutate(record.id)}
                >
                    <Button danger>Delete</Button>
                </Popconfirm>

            ),
        },
    ];


    return (
        <div>
            <Input
                placeholder="Tìm kiếm"
                style={{ width: 300 }}
                onChange={(e) => setKey(e.target.value)}
            />
            <Table columns={columns} dataSource={filteredData} loading={isLoading} pagination={{ pageSize: 5 }} />;
        </div>
    )
}