import { userData, contractStructure } from "./types";


const Card = (data: contractStructure, className: string, size: number) => {
    return (
        {
            ui_type: 'Card',
            data: {
                className: className,
                numColsLg: size,
                items: [data]
            }
        }
    );  
}

const Bold = (data: userData):contractStructure => {
    const { title } = data;

    return (
        {
            ui_type: 'Bold',
            data: {
                text: title
            }
        }
    );  
}


const Block = (data: userData) => {
    return (
        {
            ui_type: 'Block',
            data: {
                className: 'test',
                numColsLg: 3,
                items: []
            }
        }
    );  
}

const Flex = (data: userData) => {
    return (
        {
            ui_type: 'flex',
            data: {
                className: 'test',
                numColsLg: 3,
                items: []
            }
        }
    );  
}

export const UI_TEMPLATES = {
    Card,
    Block,
    Flex,
    Bold
}
