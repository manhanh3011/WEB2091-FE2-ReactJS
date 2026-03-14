import { Button, Form, Input, InputNumber, Select } from "antd"
import { useState } from "react";


function Lab3() {
    const [value, setValue] = useState();

    const onFinish = (values: any) => {
        console.log(values);      
    }

    const handleSubmit = (value: any) => {
        console.log(value);
        setValue(value);
    }
  return (
    <div>
        {/* bai 1: form dang nhap */}
        <h1 className="text-3xl font-bold">Đăng nhập</h1>
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item 
                label="Email" 
                name={"email"}
                rules={[
                    {required: true, message: "Email không được để trống"},
                ]}
                >
                <Input placeholder="nhập email"/>
            </Form.Item>
            <Form.Item 
                label="Password" 
                name={"password"}
                rules={[
                    {required: true, message: "Mật khẩu không được để trống"},
                ]}
                >
                <Input.Password placeholder="nhập mật khẩu"/>
            </Form.Item>
            <Button type="primary" htmlType="submit" >Login</Button>
        </Form>
        <br /><hr /><br />

        {/* bai 2: form dang ky */}
        <h1 className="text-3xl font-bold">Đăng ký</h1>
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item 
                label="Name" 
                name={"name"}
                >
                <Input placeholder="nhập name"/>
            </Form.Item>
            <Form.Item 
                label="Email" 
                name={"email"}
                rules={[
                    {required: true, message: "Email không được để trống"},
                    {type: "email", message: "Email không đúng định dạng"}
                ]}
                >
                <Input placeholder="nhập email"/>
            </Form.Item>
            <Form.Item 
                label="Phone" 
                name={"phone"}
                >
                <InputNumber placeholder="nhập số điện thoại"/>
            </Form.Item>
            <Form.Item 
                label="Password" 
                name={"password"}
                rules={[
                    {required: true, message: "Mật khẩu không được để trống"},
                    {min: 6, message: "Mật khẩu tối thiểu 6 kí tự"}
                ]}
                >
                <Input.Password placeholder="nhập mật khẩu"/>
            </Form.Item>
            <Form.Item 
                label="Confirm Password" 
                name={"rePassword"}
                dependencies={["password"]}
                rules={[
                    {required: true, message: "Vui lòng nhập lại mật khẩu"},
                    ({getFieldValue}) => ({
                        validator(_, value){
                            if(getFieldValue("password") === value){
                                return Promise.resolve();
                            }
                            return Promise.reject("Mật khẩu không khớp")
                        }
                    })
                ]}
                >
                <Input.Password placeholder="nhập lại mật khẩu"/>
            </Form.Item>
            <Button type="primary" htmlType="submit" >Đăng ký</Button>
        </Form>
        <br /><hr /><br />
            
        {/* bai 3: form them san pham */}
        <h1 className="text-3xl font-bold">Thêm sản phẩm</h1>
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item 
                label="Tên sản phẩm" 
                name={"name"}
                >
                <Input placeholder="nhập tên sản phẩm"/>
            </Form.Item>
            <Form.Item 
                label="Giá" 
                name={"price"}
                >
                <InputNumber placeholder="nhập giá"/>
            </Form.Item>
            <Form.Item 
                label="Số lượng" 
                name={"quantity"}
                >
                <InputNumber placeholder="nhập số lượng"/>
            </Form.Item>
            <Form.Item 
                label="Mô tả" 
                name={"descreption"}
                >
                <Input.TextArea placeholder="nhập mô tả"/>
            </Form.Item>
            <Button type="primary" htmlType="submit" >Thêm sản phẩm </Button>
        </Form>
        <br /><hr /><br />
            
        {/* bai 4: form them bai viet */}
        <h1 className="text-3xl font-bold">Thêm Bài Viết</h1>
        <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item 
                label="Title" 
                name={"title"}
                >
                <Input placeholder="nhập tên bài viết"/>
            </Form.Item>
            <Form.Item 
                label="Category" 
                name={"category"}
                >
                <Select placeholder="chọn danh mục" options={[
                    {value: "Technology", label: "Technology"},
                    {value: "Education", label: "Education"},
                    {value: "Education", label: "Sport"},
                ]}/>
            </Form.Item>
            <Form.Item 
                label="Slug" 
                name={"slug"}
                >
                <Input placeholder="nhập slug"/>
            </Form.Item>
            <Form.Item 
                label="Content" 
                name={"content"}
                >
                <Input.TextArea placeholder="nhập content"/>
            </Form.Item>
            <Form.Item 
                label="Image" 
                name={"image"}
                >
                <Input placeholder="nhập đường dẫn ảnh"/>
            </Form.Item>
            <Button type="primary" htmlType="submit" >Thêm bài viết</Button>
        </Form>
        {value && (
            <div>
                <h3>Bài viết vừa thêm</h3>
                <p>Title: {value.title} </p>
                <p>Category: {value.category} </p>
                <p>Slug: {value.slug} </p>
                <p>Content: {value.content} </p>
                <img src={value.image} alt={value.title} />
            </div>
        )}

    </div>   
  )
}

export default Lab3