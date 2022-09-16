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
        
    },
    {
        type: 'vestido',
        image: 'foto02.jpg',
        name: 'vestido-longo',
        color: 'verde',
    },
    {
        type: 'vestido',
        image: 'foto03.jpg',
        name: 'vestido-longo',
        color: 'mescla',
    },
    {
        type: 'joia',
        image: 'foto04.jpg',
        name: 'colar-perolas',
        color: 'Branco e Preto',
    },

    {
        type: 'sapato',
        image: 'foto07.jpg',
        name: 'sapatilha',
        color: 'nude',
      },
      {
        type: 'sapato',
        image: 'foto08.jpg',
        name: 'Scarpin',
        color: 'vermelho',
      },
      {
        type: 'sapato',
        image: 'foto09.jpg',
        name: 'Tenis',
        color: 'azul',
      },
    
];

export const Clothe = {
    getAll: () =>{
        return data;
    },

    getFromType: (type: ClotheType): Clothe[] =>{
        return data.filter((item) =>{
            if(item.type === type){
                return true;
            } else {
                return false;
            }
        });
    },
getFromName: (name: string): Clothe[] => {
    return data.filter((item) => {
if(
    item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
) {
    return true;

} else {
    return false;
}
    });
}


};

 
