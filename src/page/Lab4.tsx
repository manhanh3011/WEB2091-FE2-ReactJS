import { useMutation } from '@tanstack/react-query'
import { Button, Checkbox, Form, Input, Select } from 'antd'
import axios from "axios"
import toast from 'react-hot-toast';
import type { Category } from '../interface/Story';
import { useEffect, useState } from 'react';


function StoryForm() {

    const {mutate, isPending} = useMutation({
        mutationFn: async (values: Category) => {
            await axios.post(`http://localhost:3000/categories`, values)
        },
        onSuccess: () => {
            toast.success("Thêm danh mục thành công");
        },
        onError: () => {
            toast.error("Thêm danh mục thất bại");
        },
    });

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const {data} = await axios.get(`http://localhost:3000/categories`);
                if(data)
                    setCategories(data.map((item: Category)  => ({
                        value: item.id,
                        label: item.title
                })));
            } catch (error) {
                console.log(error);
                toast.error("Lỗi khi lấy dữ liệu");
            }
        };
        getAllCategories();
    }, [])

    const onFinish = (values: Category) => {
        mutate(values);       
    }
  return (
    <div>
        <div>
            <h1 className='text-3xl font-bold'>Thêm danh mục truyện</h1>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item 
                    label="Tên danh mục" 
                    name={"title"}
                    rules={[
                        {required: true, message: "Tên danh mục là bắt buộc"}
                    ]}
                    >
                    <Input placeholder='nhập tên truyện' />
                </Form.Item>
                <Form.Item label="Mô tả" name={"description"}>
                    <Input.TextArea placeholder='nhập mô tả' />
                </Form.Item>
                <Form.Item label="Hoạt động" name={"active"} valuePropName='checked'>
                    <Checkbox>Active</Checkbox>
                </Form.Item>
                <Button htmlType='submit' type='primary' loading={isPending} >
                    Thêm danh mục
                </Button>
            </Form>
        </div>
        {/* form thêm truyện */}
        <div>
            <h1 className='text-3xl font-bold'>Form thêm truyện</h1>
            <Form layout="vertical">

                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "Tiêu đề không được để trống" }]}
                >
                    <Input placeholder="Nhập tên truyện" />
                </Form.Item>

                <Form.Item
                    label="Author"
                    name="author"
                    rules={[{ required: true, message: "Tác giả không được để trống" }]}
                >
                    <Input placeholder="Nhập tên tác giả" />
                </Form.Item>

                <Form.Item
                    label="Image URL"
                    name="image"
                >
                    <Input placeholder="Nhập URL ảnh" />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input.TextArea placeholder="Nhập mô tả"/>
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="categoryId"
                    rules={[{ required: true, message: "Danh mục không được để trống" }]}
                >
                    <Select placeholder="Chọn danh mục" options={categories} />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Thêm mới
                </Button>

            </Form>
        </div>
    </div>   
  )
}

export default StoryForm