export class Snake {
    private headPosition: number;
    private tailPosition: number;

    private constructor(head: number, tail: number) {
        this.headPosition = head;
        this.tailPosition = tail;
    }

    public static factory(headPos: number, tailPos: number): Snake {
        // Validate
        
        if (headPos < 0 ||
            headPos > 100 ||
            tailPos < 0 ||
            tailPos > 100 ||
            headPos % 1 != 0 ||
            tailPos % 1 != 0 ||
            headPos < tailPos) {
            return null;
        }

        // Create New Snake Object
        let snake: Snake = new Snake(headPos, tailPos);

        // Return Sanke  
        return snake;
    }

    public canBite(gotiCurrentPos: number): number {
        return this.tailPosition;
    }

}
