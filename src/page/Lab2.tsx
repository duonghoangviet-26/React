import { Table } from "antd"
function Lab2() {
    const columns = [
        { title: "ID", dataIndex: "key" },
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" },
        { title: "Major", dataIndex: "major" }

    ]
    const data = [
        { key: 1, name: "Dương Hoàng Việt", age: 20, major: "FrontEnd Developer" },
        { key: 2, name: "Linh", age: 21, major: "Business" },
        { key: 3, name: "Hà", age: 19, major: "Design" },

    ]

    const columns2 = [
        { title: "ID", dataIndex: "key" },
        { title: "Product Name", dataIndex: "productName" },
        { title: "Price", dataIndex: "price" },
        { title: "Category", dataIndex: "category" }
    ]


    const data2 = [
        { key: 1, productName: "Dương", price: 2000000, category: "Quần áo" },
        { key: 2, productName: "Giày", price: 2000000, category: "Giày" },
        { key: 3, productName: "Mũ", price: 2000000, category: "Mỹ" },
        { key: 4, productName: "Áo", price: 2000000, category: "Áo" },
        { key: 5, productName: "Dép", price: 2000000, category: "Dép" }

    ]

    const UserColumns = [
        { title: "ID", dataIndex: "key" },
        { title: "Name", dataIndex: "name" },
        { title: "Email", dataIndex: "email" },
        {
            title: "Status", dataIndex: "status",
            render: (status: string) => (
                <span style={{ color: status === "active" ? "blue" : "red" }}>{status}</span>
            )
        },
        {
            title: "Action",
            render: (_: any, record: any) => (
                <>
                    <button>Edit</button>
                    <button>Delete</button>
                </>
            ),
        },

    ]

    const dataUser = [
        { key: 1, name: "DươngHV", email: "duonghv@gmail.com", status: "active" },
        { key: 2, name: "DươngHV", email: "duonghv@gmail.com", status: "inactive" },
        { key: 3, name: "DươngHV", email: "duonghv@gmail.com", status: "inactive" },

    ]

    return (
        <div>
            <h1 className="text-3xl text-center mb-3">Bảng danh sách sinh viên</h1>
            <Table columns={columns} dataSource={data} />


            <h1 className="text-3xl text-center mb-3">Bảng danh sách sản phẩm</h1>
            <Table columns={columns2} dataSource={data2} pagination={{ pageSize: 3 }} />

            <h1 className="text-3xl text-center mb-3">Bảng danh sách User Management</h1>
            <Table columns={UserColumns} dataSource={dataUser} />
        </div>
    )
}

export default Lab2