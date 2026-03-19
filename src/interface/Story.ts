export type Story = {
    id: string,
    title: string,
    author: string,
    image: string,
    description: string,
}

export type Category = {
    id: number,
    title: string,
    description: string,
    active: boolean,
}