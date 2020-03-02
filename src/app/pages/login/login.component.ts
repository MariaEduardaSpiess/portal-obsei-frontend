import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    validateForm: FormGroup;
    returnUrl: string;
    isError: boolean;

    constructor(private fb: FormBuilder, private utils: UtilsService, private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.validateForm.valueChanges.subscribe(() => {
            this.isError = false;
        });
        this.validateForm.reset();
    }

    submitForm(): void {
        this.utils.validateForm(this.validateForm);
        if (this.validateForm.valid) {
            this.authService.login(this.validateForm.value)
                .subscribe((res) => {
                    this.authService.setToken(res.token)
                    this.router.navigate([this.returnUrl]);
                }, error => { 
                    this.validateForm.reset();
                    console.log(error);
                    this.isError = true;
                });
        }
    }
}