export interface Blog {
    category: string;
    content: string;
    created: number; // timestamp in milliseconds
    description: string;
    objectId: string;
    ownerId: null | string;
    thumbnail: string;
    title: string;
    updated: number | null; // timestamp in milliseconds
    ___class: string;
}