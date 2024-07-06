import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected aFormGroup: FormGroup;
  isCaptchaValid: boolean = false;
  captchaResolved: boolean = false;
  siteKey: string = "6LfTj2gpAAAAABa17_-TWUraXZG9HfTsmIAFCkmQ";

  
  emp: any;

  //Dependency Injection for EmpService, Router
  constructor(private router: Router, private service: ServicesService,private formBuilder: FormBuilder) {  
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  ngOnInit(){
  }

  onCaptchaResolved(event: any) {
    this.isCaptchaValid = true;
    this.captchaResolved = true;
  }

  async loginSubmit(loginForm: any) {
    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {           
      this.service.setIsUserLoggedIn();
      localStorage.setItem("emailId", loginForm.emailId);
      this.router.navigate(['showemps']);
    } else {
      this.emp = null;

      await this.service.customerLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.emp = data;
      });

      if (this.emp != null) {
        this.service.setIsUserLoggedIn();        
        localStorage.setItem("emailId", loginForm.emailId);
        console.log("success");
        this.router.navigate(['aboutus']);
      } else {
        alert('Invalid Credentials');
      }
    }
  }
}
