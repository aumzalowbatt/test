import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'numberDecimal'
})
export class NumberDecimalPipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        if (typeof value === 'string') {
            if (value.indexOf('.') === -1) {
                return value.replace(/\d(?=(\d{3})+\.)/g, '$&,') + '.00';
            }
            return value.replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        if (typeof value === 'number') {
            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
    }
}
