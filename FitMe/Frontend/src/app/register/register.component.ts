import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit
{

  countries: any;
  customer: any;
  

  constructor(private service: ServicesService, private router: Router,  private toastr: ToastrService ) {
    this.customer = {
      customerName: '',
      gender: '',
      country: '',
      emailId: '',
      password: '',
      phoneNumber: '',
      confirmPassword: '',
    };
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
  }
  registerSubmit(regForm: any) {
    if (this.customer.password !== this.customer.confirmPassword) {
      console.log('Password and Confirm Password must be the same.');
      
    this.customer.customerName = regForm.customerName;
    this.customer.gender = regForm.gender;
    this.customer.country = regForm.country;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;
    this.customer.phoneNumber = regForm.phoneNumber;
    this.customer.confirmPassword= regForm.confirmPassword;

    

    this.service.regsiterCustomer(this.customer).subscribe((data: any) => { console.log('Registration successful:', data);
    this.toastr.success('Registration Successful', 'Success'); // Display toastr message on success
    this.router.navigate(['login']); // Redirect to login page after successful registration

  },
  (error: any) => {
    this.toastr.error('Registration Failed', 'Error');
    console.error('Registration failed:', error);
    // Handle registration error here
  }
);

    this.router.navigate(['login']);
    }
    else{
      console.log('Password and Confirm Password must be the same.');
    }
  }
}