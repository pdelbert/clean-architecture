export type UI_TYPE = 'Flex' | 'Card' | 'Block' | 'Bold';

export interface userData {
    id?: number,
    name?: string,
    title?: string
}

export interface contractData {
    className?: string
    numColsLg?: string | number,
    text?: string,
    items?: [contractStructure] | []
}

export interface contractStructure {
    ui_type: UI_TYPE
    data?: contractData
}

export interface BlockStructure {
    ui_type: UI_TYPE
    data: contractData
}

export interface CardStructure {
    className: string
    numColsLg?: string | number
    text: string,
    items: []
}

export interface BoldStructure {
    text: string
}