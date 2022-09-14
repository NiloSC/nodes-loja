type ClotheType = 'vestido' | 'sapato' | 'joia';

type Clothe = {
    type: ClotheType,
    image: string,
    name: string,
    color: string,
    
}


const data: Clothe[] = [
    {
        type: 'vestido',
        image: 'foto01.jpg',
        name: 'Vestido-Midi',
        color: 'rose',
        
    }
];

export const Clothe = {
    getAll: () =>{
        return data;
    },
}
