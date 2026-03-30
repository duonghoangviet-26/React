import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


function ListPage() {

    const columns = [
        {
            title: "Tiêu đề",
            dataIndex: "title"
        },
        {
            title: "Số lượng",
            dataIndex: "duration"
        }, {
            title: "Hình ảnh",
            dataIndex: "thumbnail",
            render: (src: string) => <Image src={src} width="80px" />
        },
        {

            title: "Danh Mục",
            dataIndex: "category"
        }
        ,
        {
            title: "Hành động",
            render: (_: any, record: any) => {
                return (
                    <>
                        <Popconfirm
                            title="Bạn có muốn xóa không"
                            okText="Có"
                            cancelText="No"
                            onConfirm={() => { mutate(record.id) }}
                        >
                            <Button>Xóa</Button>
                        </Popconfirm>
                        <Link to={`/edit/${record.id}`}>Sửa</Link>
                    </>
                )
            }
        }

    ]

    const { data } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/courses`);
            return res.data;
        }
    })

    const qc = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`http://localhost:3000/courses/${id}`);
        },
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["courses"] });
            toast.success("Xóa thành công")
        },
        onError: () => {
            alert("Lỗi không xóa được");
        }
    })


    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

            <div className="overflow-x-auto">
                <Table columns={columns} dataSource={data} rowKey="id" />
            </div>
        </div>
    );
}

export default ListPage;
