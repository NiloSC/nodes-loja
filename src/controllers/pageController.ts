import {Request, Response} from "express";

export const home = (req: Request, res: Response) => {
    res.render("pages/page", {
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpg",
        },
});
};
export const Vestidos = (req: Request, res: Response) => {
    res.render("pages/page", {
        banner: {
            title: "Vestidos",
            background: "vestidos.jpg",
        },
});
};

export const Sapatos = (req: Request, res: Response) => {
    res.render("pages/page", {
        banner: {
            title: "Sapatos",
            background: "sapato.jpg",
        },
});
};

export const Joias = (req: Request, res: Response) => {
    res.render("pages/page", {
        banner: {
            title: "Joias",
            background: "joias.jpg",
        },
});
};