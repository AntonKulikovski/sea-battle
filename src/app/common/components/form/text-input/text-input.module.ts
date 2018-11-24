import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TextInputComponent } from "./text-input.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        TextInputComponent,
    ],
    exports: [
        TextInputComponent,
    ]
})
export class TextInputModule {}