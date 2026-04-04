import { Button, Form, Input } from 'antd'
import { useEffect } from 'react';
import { useCRUDStory } from '../hooks/useCRUDStory';
import { useParams } from 'react-router-dom';

function EditForm() {
    const {id} = useParams();
    const {detailStory, editStory} = useCRUDStory();

    const [form] = Form.useForm();

    useEffect(() => {
        if(detailStory){
            form.setFieldsValue(detailStory);
        }
    }, [detailStory]);

    const onFinish = (values: any) => {
        editStory.mutate({id, values});
    }

  return (
    <Form layout='vertical' onFinish={onFinish} form={form} >
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
        <Button htmlType='submit' >Cập nhật</Button>
    </Form >
  )
}

export default EditForm