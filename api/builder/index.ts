import { UI_TYPE, userData, contractStructure, contractData } from "./types";
import { UI_TEMPLATES } from "./templates";

const userData:userData[] = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Sr. Front Developer'
    },
    {
        id: 2,
        name: 'John Doe II',
        title: 'Sr. Backend Developer'
    }
]

const RenderOnCards =() => {
    const testData:userData[] = userData;

    const templateContent = testData.map((item, index) => {
        return {
            ui_type: 'Card',
            data: {
                className: 'card card-'+item.id,
                items: [{
                    ui_type: 'Bold',
                    data: {
                        text: item.name
                    }
                }]
            }
        }
    })
}




const ViewTemplate = [
    {
        ui_type: 'Flex',
        children: {
            ui_type: 'Card',
            children: [
                {
                    ui_type: 'Block',
                    children: {
                        ui_type: 'ColGrid',
                        children: [
                            { 
                                ui_type: 'Col', 
                                children: [{
                                    ui_type: 'Bold'
                                }]
                             },
                            { 
                                ui_type: 'Col',
                                children: [{
                                    ui_type: 'Bold'
                                }]
                             }
                        ]
                    }
                },
                {ui_type: 'flex' }
            ]
        }
    }
]


const buildContractUserData = (contractData:userData[]) => {
    const contractUserData:contractStructure[] = contractData.map((user) => {
        const contrato:contractStructure = {
            ui_type: 'Card',
            data: {
                className: 'card',
                numColsLg: '2',
                text: user.name,
                items: []
            }
        }

        return contrato
    });



    return contractUserData;
}
 
const contractDataStructure: contractData = {
    className: 'text-center',
    numColsLg: 3,
    text: 'test',
    items: []
}

const mockContract:contractStructure = {
    ui_type: 'Flex',
    data: {
        className: 'test',
        numColsLg: 3,
        items: [
            {
                ui_type: 'Card',
                data: {
                    className: 'test',
                    numColsLg: 3,
                    items: []
                }
            }
        ]
    }
}


export const buildTemplate = (ui_type: UI_TYPE, items: userData[]) => {
    const responseBuilder = items.map((item, _) => UI_TEMPLATES['Bold'](item))
    const itemsContainer = responseBuilder.map((item, index) => UI_TEMPLATES['Card'](responseBuilder[index], 'test-class', 6))

    return itemsContainer;
}