export type Story = {
    id: number,
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