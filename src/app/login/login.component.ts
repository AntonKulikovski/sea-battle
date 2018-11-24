import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'cmpt-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public user: string;
    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        this.loginForm = this.formBuilder.group({
            name: [null, [
                Validators.required,
            ]],
            password: [null, [
                Validators.required,
            ]]
        });
    }
}   