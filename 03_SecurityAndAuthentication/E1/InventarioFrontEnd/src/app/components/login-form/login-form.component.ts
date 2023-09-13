import { Component, EventEmitter, Input,OnChanges,Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{

  @Input() isSignUp!: boolean;
  @Output() responseForm: EventEmitter<any> = new EventEmitter();
  formUser!: FormGroup;
  defaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',Validators.required)
  }
  extraFields = {
    firstName:new FormControl('', Validators.required),
    lastName:new FormControl('', Validators.required),
    phoneNumber:new FormControl('', Validators.required)
  }
  constructor(private fb:FormBuilder){
 
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initForm();
  }

  initForm(){
    let usersFields = {...this.defaultFields};

      if(this.isSignUp){
        usersFields = {...this.defaultFields, ...this.extraFields};
      }
    this.formUser = this.fb.group(
      usersFields
    )
  }

  onSubmitForm(){
    if(this.formUser.invalid){
      alert("All fields must be filled");
      return;
    }
    this.responseForm.emit(this.formUser.value);
  }
}
