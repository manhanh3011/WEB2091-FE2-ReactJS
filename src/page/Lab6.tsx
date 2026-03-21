import { Button, Form, Input } from 'antd'
import type { Story } from '../interface/Story';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

function EditForm() {
    const {id} = useParams();

    const {data} = useQuery({
        queryKey: ["story", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;
        }
    })

    const [form] = Form.useForm();
    const nav = useNavigate();
    const qc = useQueryClient();

    useEffect(() => {
        if(data){
            form.setFieldsValue(data);
        }
    }, [data]);

    const {mutate, isPending} = useMutation({
        mutationFn: async(values: Story) => {
            await axios.put(`http://localhost:3000/stories/${id}`, values);
        },
        onSuccess: () => {
            toast.success("Cập nhật thành công");
            qc.invalidateQueries({queryKey: ["getAllStories"]});
            nav("/list");
        },
        onError: () => {
            toast.error("Cập nhật thất bại")
        },
    })

    const onFinish = (values: Story) => {
        console.log(values);
        mutate(values);
    }

  return (
    <Form layout='vertical' onFinish={onFinish} form={form} disabled={isPending}>
        <Form.Item 
            label="Tên truyện" 
            name={"title"} 
            rules={[{required: true, message: "Tên truyện là bắt buộc"}]}
            >
            <Input placeholder='nhập tên ...' />
        </Form.Item>
        <Form.Item 
            label="Tác giả" 
            name={"author"} 
            rules={[{required: true, message: "Tên tác giả là bắt buộc"}]}
            >
            <Input placeholder='nhập tác giả ...' />
        </Form.Item>
        <Form.Item label="Hình ảnh" name={"image"} >
            <Input placeholder='nhập đường dẫn ...' />
        </Form.Item>
        <Form.Item label="Mô tả" name={"description"} >
            <Input.TextArea placeholder='nhập mô tả ...' />
        </Form.Item>
        <Button htmlType='submit' loading={isPending}>Cập nhật</Button>
    </Form >
  )
}

export default EditForm