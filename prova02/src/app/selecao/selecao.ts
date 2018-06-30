import { Grupo} from "../grupo/grupo";

export class Selecao {

    id : number;
    name : string;
    group : Grupo;

    constructor(id?: number, name?: string, group?: Grupo) {

        this.id = id;
        this.name = name;
        this.group = group;
    }

}