import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
    selector: 'app-equation',
    templateUrl: './equation.component.html',
    styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
    secondsPerSolution = 0;

    mathForm = new FormGroup(
        {
            a: new FormControl(this.randomNumber()),
            b: new FormControl(this.randomNumber()),
            answer: new FormControl(''),
        },
        [MathValidators.addition('answer', 'a', 'b')]
    );

    constructor() {}

    get a() {
        return this.mathForm.value.a;
    }

    get b() {
        return this.mathForm.value.b;
    }

    ngOnInit(): void {
        const startTime = new Date();
        let numberSolved = 0;
        let delayMillis = 100;

        this.mathForm.statusChanges
            .pipe(
                filter((value) => value === 'VALID'),
                delay(delayMillis)
                // THIS DOESN'T WORK scan((acc) => {
                //     return {
                //         numberSolved: acc.numberSolved + 1,
                //         startTime: acc.startTime
                //     }
                //}
                //)
            )
            .subscribe(() => {
                numberSolved++;
                this.secondsPerSolution =
                    (new Date().getTime() - startTime.getTime() - delayMillis) /
                    numberSolved /
                    1000;

                // If we get a "valid" response, get new values for a + b and clear answer
                // this.mathForm.controls.a.setValue(this.randomNumber());
                // this.mathForm.controls.b.setValue(this.randomNumber());
                // this.mathForm.controls.answer.setValue("");

                // equivalent to above -- can only use this when we want to update _everything_ in form (otherwise use 'patchValue')
                this.mathForm.setValue({
                    a: this.randomNumber(),
                    b: this.randomNumber(),
                    answer: '',
                });
            });
    }

    randomNumber(): number {
        return Math.floor(Math.random() * 10);
    }
}
