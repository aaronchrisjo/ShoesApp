import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { Router } from 'express';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { FormService } from '../form.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  contactForm: FormGroup;
  // displayText : string = '';
  submissionResult : string | null = null ;

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: ['',Validators.required],
      number:['',[Validators.required,Validators.pattern(/^\d+$/)]],
      address:['',Validators.required]
    })
  }

  ngOnInit(): void{}

  onSubmit(){
    if(this.contactForm.valid){
      this.displayText('Form Submitted!',this.contactForm.value);
    }
  }

  displayText(message:string,formData:any){
    this.submissionResult = `${message}`;
    console.log('Form Data: ',formData)
  }
  
}