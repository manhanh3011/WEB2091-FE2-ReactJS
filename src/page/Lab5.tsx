import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Image, Popconfirm, Table } from 'antd';
import axios from 'axios';
import type { Story } from '../interface/Story';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function StoryList() {
    const nav = useNavigate();

    const {data, isLoading} = useQuery({
        queryKey: ["getAllStories"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/stories`);
            return res.data;
        },
    });

    const qc = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: async(id: string) => 
            await axios.delete(`http://localhost:3000/stories/${id}`),
            onSuccess: () => {
                toast.success("Xoá thành công");
                qc.invalidateQueries({queryKey: ["getAllStories"]});
            }             
    })

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
                        onConfirm={() => mutate(record.id)}
                    >
                        <Button danger>Xoá</Button>                   
                    </Popconfirm>
                    <Button type='primary' onClick={() => nav(`/edit/${record.id }`)}>Sửa</Button>               
                </div>
            )
        }
    ];

  return (
        <Table columns={columns} dataSource={data} loading={isLoading} pagination={{pageSize: 5}} />
    )
}

export default StoryList