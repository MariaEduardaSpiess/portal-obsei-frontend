import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/utils/utils.service';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    validateForm: FormGroup;
    returnUrl: string;


    constructor(private fb: FormBuilder, private utils: UtilsService, private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    submitForm(): void {
        this.utils.validateForm(this.validateForm);
        if (this.validateForm.valid) {
            this.authService.login(this.validateForm.value)
                .pipe(first())
                .subscribe(() => {
                    this.router.navigate([this.returnUrl]);
                });
        }
    }
}