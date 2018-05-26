export class Snake {
    public headIndex:number;
    public tailIndex:number;

    constructor(head:number, tail:number) {
        this.headIndex=head;
        this.tailIndex=tail;
    }

    bite():number{
       return this.tailIndex;
    }
}
