import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-area',
  templateUrl: './my-area.component.html',
  styleUrls: ['./my-area.component.scss']
})
export class MyAreaComponent implements OnInit {

  // Current balance in dollars
  balance = 1000;

  // Exchange rate (1 dollar = 0.8 euros)
  exchangeRate = 0.8;

  // Calculate the number of euros the user can buy
  euros = this.balance * this.exchangeRate;

  // Flag to show/hide error message
  invalidAmount = false;

  // Form group for the buy form
  buyForm: FormGroup = new FormGroup({
    amount: new FormControl('', Validators.required)
  });

  constructor() { }

  // Method to handle form submission
  onSubmit() {
    // Calculate the maximum number of euros the user can buy
    const maxEuros = this.balance / this.exchangeRate;

    // Check if the entered amount is greater than the maximum amount
    if (this.buyForm.value.amount > maxEuros) {
      // Show error message
      this.invalidAmount = true;
    } else {
      // Update the balance and the number of euros
      this.balance -= this.buyForm.value.amount * this.exchangeRate;
      this.euros = this.balance * this.exchangeRate;

      // Reset the form and hide the error message
      this.buyForm.reset();
      this.invalidAmount = false;
    }
  }
  
  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const inputVal = (event.target as HTMLInputElement).value;
    
    this.buyForm.get('amount')?.setValue(inputVal)
  }

}
