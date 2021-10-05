import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    ResetForm: FormGroup;
    submitted = false;
  constructor( private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.formInit()
  }

  formInit() {
    this.ResetForm = this.formBuilder.group({
      old_password: ['',Validators.required,],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

    // convenience getter for easy access to form fields
    get f() { return this.ResetForm.controls; }

    onSubmit() {
      this.submitted = true;
      console.log(this.ResetForm.value)
      this.authService.ResetPassword(this.ResetForm.value).subscribe(res=>{
        if(res==null){

        }
        else{
          swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Password successfully reset!',
              showConfirmButton: false,
              timer: 2000,
            })
            this.ResetForm.reset();
        }
      })
    }
}



// ?validation function
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}