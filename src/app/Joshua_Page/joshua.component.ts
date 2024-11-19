import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-joshua',
    standalone: true,
    templateUrl: './joshua.component.html',
    styleUrl: './joshua.component.css'
})

export class JoshuaComponent implements OnInit {
    
    currentNumber = '0';
    firstOperand: number | null = null;
    operator: string | null = null;
    waitForSecondNumber = false;

    ngOnInit(): void {

    }

    public getNumber(v: string) {
        console.log(v);
        if (this.waitForSecondNumber) {
            this.currentNumber = v;
            this.waitForSecondNumber = false;
        } else {
            this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
        }
    }

    getDecimal() {
        if (!this.currentNumber.includes('.')) {
            this.currentNumber += '.';
        }
    }

    private doCalculation(op: string, secondOp: number) {
        if (this.firstOperand === null) {
            throw new Error('First operand is null');
        }

        switch (op) {
            case '+':
                return this.firstOperand += secondOp;
            case '-':
                return this.firstOperand -= secondOp;
            case '*':
                return this.firstOperand *= secondOp;
            case '/':
                return this.firstOperand /= secondOp;
            case '=':
                return secondOp;
            default:
                return this.firstOperand;
        }
    }

    public getOperation(op: string) {
        console.log(op);

        if (this.firstOperand === null) {
            this.firstOperand = Number(this.currentNumber);
        } else if (this.operator) {
            const result = this.doCalculation(this.operator, Number(this.currentNumber));
            if (result !== undefined) {
                this.currentNumber = String(result);
                this.firstOperand = result;
            }
        }
        this.operator = op;
        this.waitForSecondNumber = true;

        console.log(this.firstOperand);
    }

    public clear() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    }
}
