import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-addplant',
  imports: [ReactiveFormsModule],
  templateUrl: './addplant.component.html',
  styleUrl: './addplant.component.css'
})
export class AddplantComponent {
  addplant: FormGroup;
  
  constructor(private fb: FormBuilder) {
    // Define form fields with validation rules
    this.addplant = this.fb.group({
      name: ['', Validators.required],
      height: ['', [Validators.required, Validators.email]],
      pot_change: ['', [Validators.required, Validators.minLength(1)]],
      type: ['', [Validators.required, Validators.minLength(1)]],
    });
}
  // Submit handler
  onSubmit(): void {
    if (this.addplant.valid) {
      console.log('Form Data:', this.addplant.value); // Form values on submission
    } else {
      console.log('Form is invalid.');
    }
  }
}