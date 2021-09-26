import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/services/credit-card-service.service';
import {CreditCard} from 'src/app/models/credit-card.type'

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {
  formGroup: FormGroup
  
  


  constructor(private fb: FormBuilder , private creditCardService:CreditCardService) {this.createForm(); }
  ngOnInit(): void {
    
  }

  


  onSubmit(formGroup) {
    const creditCard : CreditCard = {
      card_number: parseInt(formGroup.card_number),
	    csc_code: parseInt(formGroup.csc_code),
	    cardholder_name: formGroup.cardholder_name,
	    expiration_date_month: parseInt(formGroup.expiration_date_month),
	    expiration_date_year: parseInt(formGroup.expiration_date_year),
	    issuer: formGroup.issuer
    }
    
    this.creditCardService.createCreditCard(creditCard) 

    this.formGroup.reset();
    Object.keys(this.formGroup.controls).forEach(key => {
      this.formGroup.get(key).setErrors(null) ;
    });
  }

  createForm() {
    this.formGroup = this.fb.group({
      'card_number': ['',[Validators.required, Validators.minLength(7),Validators.maxLength(16),Validators.pattern('^[0-9]*$')]],
      'cardholder_name': ['',[Validators.required]],
      'csc_code': ['',[Validators.required, Validators.minLength(3),Validators.maxLength(3),Validators.pattern('^[0-9]*$')]],
      'expiration_date_month': ['',[Validators.required, Validators.min(1), Validators.max(12),Validators.pattern('^[0-9]*$')]],
      'expiration_date_year': ['',[Validators.required, Validators.min(1),Validators.max(31),Validators.pattern('^[0-9]*$')]],
      'issuer': ['',[Validators.required]]
    });
  }

  errorRequired(name: string) : string {
    const form: FormControl = (this.formGroup.get(name) as FormControl);
    return form.hasError('required') ?
      'Field is required' : '';
 }

  get errorCardNumber() : string {
    const form: FormControl = (this.formGroup.get('card_number') as FormControl);
    return form.hasError('required') ?
      'Card number is required' :
      form.hasError('pattern') ?
      'Card number only accepts number' :
      form.hasError('minlength') ?
      'Card number min length 7' :
      form.hasError('maxlength') ?
      'Card number max lengths 16' : '';
 }

 get errorCsc() : string {
  const form: FormControl = (this.formGroup.get('csc_code') as FormControl);
  return form.hasError('required') ?
    'CSC is required' :
    form.hasError('pattern') ?
    'CSC only accepts number' :
    form.hasError('minlength') ?
    'CSC min length 3' :
    form.hasError('maxlength') ?
    'CSC max lengths 3' : '';
}

get errorMonth() : string {
  const form: FormControl = (this.formGroup.get('expiration_date_month') as FormControl);
  return form.hasError('required') ?
    'Month is required' :
    form.hasError('pattern') ?
    'Month only accepts number' :
    form.hasError('min') ?
    'Month min 1' :
    form.hasError('max') ?
    'Month max 12' : '';
}

get errorYear() : string {
  const form: FormControl = (this.formGroup.get('expiration_date_year') as FormControl);
  return form.hasError('required') ?
    'Year is required' :
    form.hasError('pattern') ?
    'Year only accepts number' :
    form.hasError('min') ?
    'Year min 1' :
    form.hasError('max') ?
    'Year max 31' : '';
}


}
