import { Component, Input } from "@angular/core";
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'c-text-input',
    templateUrl: './text-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextInputComponent,
            multi: true,
        },
    ],
})
export class TextInputComponent implements ControlValueAccessor {
    @Input() formControl: FormControl;

    public writeValue(): void {
        
    }

    public registerOnChange(): void{}
    public registerOnTouched(): void{}
}