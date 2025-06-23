export default interface Container {
    id: string;
    color: string;
    name: string;
    description: string;
}

export type Item = {
    id: string;
    name: string;
    containerId: string;
};