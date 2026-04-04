import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export const useCRUDStory = () => {

    const qc = useQueryClient();
    const nav = useNavigate();
    const {id} = useParams();

    const {data: listStory} = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const {data} = await axios.get(`http://localhost:3000/stories`);
            return data;
        }
    });

    const {data: detailStory} = useQuery({
        queryKey: ['stories', id],
        queryFn: async () => {
            const {data} = await axios.get(`http://localhost:3000/stories/${id}`);
            return data;
        }
    });

    const addStory = useMutation({
        mutationFn: async (values: any) => {
            const {data} = await axios.post(`http://localhost:3000/stories`, values);
            return data;
        },
        onSuccess: () => {
            toast.success("Them thanh cong");
            qc.invalidateQueries({queryKey: ['stories']});
            nav("/");
        },
        onError: () => {
            toast.error("Them that bai")
        }
    })

    const editStory = useMutation({
        mutationFn: async ({id, values}: any) => {
            const {data} = await axios.put(`http://localhost:3000/stories/${id}`, values);
            return data;
        },
        onSuccess: () => {
            toast.success("Cap nhat thanh cong");
            qc.invalidateQueries({queryKey: ['stories']});
            nav("/");
        },
        onError: () => {
            toast.error("Cap nhat that bai")
        }
    })

    const deleteStory = useMutation({
        mutationFn: async (id: string) => {
            await axios.delete(`http://localhost:3000/stories/${id}`);
        },
        onSuccess: () => {
            toast.success("Xoa thanh cong");
            qc.invalidateQueries({queryKey: ['stories']});
        },
        onError: () => {
            toast.error("Xoa that bai")
        }
    })

    return {listStory, detailStory, addStory, editStory, deleteStory};
}