import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-addplant-form',
  imports: [ReactiveFormsModule],
  templateUrl: './addplant-form.component.html',
  styleUrl: './addplant-form.component.css'
})
export class AddplantFormComponent {
  addplantForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // Define form fields with validation rules
    this.addplantForm = this.fb.group({
      name: ['', Validators.required],
      height: ['', Validators.required],
      potChange: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Submit handler
  onSubmit(): void {
    if (this.addplantForm.valid) {
      console.log('Form Data:', this.addplantForm.value); // Form values on submission
    } else {
      console.log('Form is invalid.');
    }
  }
}
