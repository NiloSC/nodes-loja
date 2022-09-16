import {Request, Response} from "express";
import {createMenuObject } from "../helpers/createMenuObject.";
import { Clothe } from '../models/clothe'

export const home = (req: Request, res: Response) => {
    let list = Clothe.getAll();

    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpg",
        },
        list,
});
};
export const Vestidos = (req: Request, res: Response) => {
    let list = Clothe.getFromType('vestido');
    res.render("pages/page", {
        menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
            background: "foto11.jpeg",
        },
        list,
});
};

export const Sapatos = (req: Request, res: Response) => {
    let list = Clothe.getFromType('sapato');
    res.render("pages/page", {
        menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
            background: "foto12.jpeg",
        },
        list,
});
};

export const Joias = (req: Request, res: Response) => {
    let list = Clothe.getFromType('joia');
    res.render("pages/page", {
        menu: createMenuObject('joia'),
        banner: {
            title: "Joias",
            background: "foto10.jpeg",
        },
        list,
});
};