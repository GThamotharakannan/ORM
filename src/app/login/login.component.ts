import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/services/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService]
})
export class LoginComponent implements OnInit {
    authenticationForm: any;
    userdetail: any;
    responseDetail: any;
    showError: boolean;
    constructor(
        public router: Router, public apiService: ApiService
    ) { }

    ngOnInit() {

        this.authenticationForm = new FormGroup({
            userName: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
        this.showError = false;


    }

    onLoggedin() {

        this.showError = false;
        if (this.authenticationForm.valid) {
            console.log(this.authenticationForm.value);
            this.apiService.userAuthentication(this.authenticationForm.value).subscribe(response => {
                if (response.type == 4) {
                    this.responseDetail = response;
                    if (this.responseDetail.body.status) {
                        this.showError = false;
                        localStorage.setItem('userDetail', JSON.stringify(this.responseDetail.body));
                        this.router.navigate(['/dashboard']);
                    } else {
                        this.showError = true;
                        console.log('Invalid User');
                    }
                }
            });
            localStorage.setItem('isLoggedin', 'true');
        }
    }
}
