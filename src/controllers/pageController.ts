import {Request, Response} from "express";
import {createMenuObject } from "../helpers/createMenuObject.";

export const home = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpg",
        },
});
};
export const Vestidos = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
            background: "foto11.jpeg",
        },
});
};

export const Sapatos = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
            background: "foto12.jpeg",
        },
});
};

export const Joias = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('joia'),
        banner: {
            title: "Joias",
            background: "foto10.jpeg",
        },
});
};