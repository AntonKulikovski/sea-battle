import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TextInputModule } from '../common/components/form/text-input/text-input.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextInputModule,
    ],
    declarations: [
        LoginComponent,
    ],
    entryComponents: [
        LoginComponent,
    ],
})
export class LoginModule { }