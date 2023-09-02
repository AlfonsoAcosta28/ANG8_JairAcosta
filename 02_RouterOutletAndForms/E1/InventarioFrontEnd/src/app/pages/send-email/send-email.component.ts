import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnChanges{
  
  @Output() responseForm: EventEmitter<any> = new EventEmitter();
  formMensaje!: FormGroup;
  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    name:new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    mensaje:new FormControl('', Validators.required)
  }
  constructor(private fb:FormBuilder){
 
    this.initForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  initForm(){
    let usersFields = {...this.defaultFields};
    this.formMensaje = this.fb.group(
      usersFields
    )
  }

  onSubmitForm(){
    if(this.formMensaje.invalid){
      alert("All fields must be filled");
      return;
    }
    // this.responseForm.emit(this.formMensaje);
    alert('Mensaje enviado con exito')
  }
}
