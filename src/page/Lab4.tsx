import { useMutation } from '@tanstack/react-query'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from "axios"
import toast from 'react-hot-toast';
import type { ICategory } from '../interface/Story';


function StoryForm() {

    const {mutate, isPending, isSuccess} = useMutation({
        mutationFn: async (values: ICategory) => {
            await axios.post(`http://localhost:3000/categories`, values)
        },
        onSuccess: () => {
            toast.success("Thêm danh mục thành công");
        },
        onError: () => {
            toast.error("Thêm danh mục thất bại");
        },
    });

    const onFinish = (values: ICategory) => {
        mutate(values);       
    }
  return (
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
  )
}

export default StoryForm