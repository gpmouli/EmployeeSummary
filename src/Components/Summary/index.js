import { Table, Space, Button, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

const Summary = (empList) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email Id",
      dataIndex: "emailId",
      key: "emailId",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            onClick={() => navigate(`/employee/edit/${record.id}`)}
          >
            EDIT{" "}
          </Button>{" "}
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => empList.deleteEmployee(record.id)}
          >
            <Button danger> Delete </Button>{" "}
          </Popconfirm>{" "}
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={empList.data} />;
};

export default Summary;
