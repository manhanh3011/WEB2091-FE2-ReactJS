import { Button, Image, Popconfirm, Table } from 'antd';
import type { Story } from '../interface/Story';
import { useNavigate } from 'react-router-dom';
import { useCRUDStory } from '../hooks/useCRUDStory';

function StoryList() {
    const nav = useNavigate();

    const {listStory, deleteStory} = useCRUDStory();

    const columns = [
        {title: "Tên truyện", dataIndex: "title"},
        {title: "Tác giả", dataIndex: "author"},
        {title: "Hình ảnh", dataIndex: "image", render: (src: string) => <Image src={src} height={100} alt="title" /> },
        {title: "Mô tả", dataIndex: "description"},
        {
            title: "Ngày tạo", 
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
        },
        {
            title: "Hành động",
            render: (_: Story, record: Story) => (
                <div>
                    <Popconfirm
                        title="Xoá truyện"
                        description="Bạn chắc chắn muốn xoá không?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => deleteStory.mutate(record.id)}
                    >
                        <Button danger>Xoá</Button>                   
                    </Popconfirm>
                    <Button type='primary' onClick={() => nav(`/edit/${record.id }`)}>Sửa</Button>               
                </div>
            )
        }
    ];

  return (
        <Table columns={columns} dataSource={listStory} pagination={{pageSize: 5}} />
    )
}

export default StoryList