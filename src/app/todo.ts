export class Todo{

    item: string;
    done: boolean;

    constructor(item: string, done?: boolean){
        this.item = item;
        this.done = done;
    }

}