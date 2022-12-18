import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Form group for the login form
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  // Flag to show/hide error message
  invalidCredentials = false;

  constructor(private router: Router) { }

  // Method to handle form submission
  onSubmit() {
    // Check if the entered credentials are valid
    if (this.loginForm.value.username === 'gianni' && this.loginForm.value.password === 'aWER234!16') {
      // Navigate to the "My Area" component
      this.router.navigate(['/my-area']);
    } else {
      // Show error message
      this.invalidCredentials = true;
    }
  }
}
