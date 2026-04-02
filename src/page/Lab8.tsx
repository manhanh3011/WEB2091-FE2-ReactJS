import { useMutation } from "@tanstack/react-query";
import { Form, Input, Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "../stores/useAuthStore";

function Register() {

    const {setUser} = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      const {data} = await axios.post(`http://localhost:3000/register`, values);
      return data;
    },
    onSuccess: (data) => {
        toast.success("Đăng kí thành công");
        setUser(data.user);
    },
    onError: () => {
      toast.error("Đăng kí thất bại");
    },
  });

  const onFinish = async (values: any) => {
    mutate(values)
  }

  return (
    <Form layout="vertical" style={{ maxWidth: 400, margin: "0 auto" }} onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Vui lòng nhập username" }]}
      >
        <Input placeholder="Nhập username" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email!" },
          { type: "email", message: "Email không hợp lệ!" },
        ]}
      >
        <Input placeholder="Nhập email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Vui lòng nhập mật khẩu!" },
          { min: 6, message: "Mật khẩu tối thiểu 6 ký tự!" },
        ]}
      >
        <Input.Password placeholder="Nhập mật khẩu" />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isPending} >
        Đăng ký
      </Button>
    </Form>
  );
}

export default Register;