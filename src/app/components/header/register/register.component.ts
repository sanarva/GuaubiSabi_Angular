import { Component, Input, OnInit }              from '@angular/core';
import { FormGroup, FormBuilder, Validators }    from '@angular/forms';
import { faEye }                                 from '@fortawesome/free-solid-svg-icons';

/* Servicio para mostrar/ocultar contraseñas*/
import { ShowpasswordService }                  from '../../../services/showpassword.service';

 

@Component({  
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formRegister: FormGroup;
  activeIcon = faEye;
   
  provinceSelected:string;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 

  constructor( private fb: FormBuilder
             , private showPsw: ShowpasswordService 
              
    ) { 
 
    this.crearFormulario();

    this.crearListers();
    
  }  
     
  ngOnInit(): void {
  }   
    
  get invalidMail(){
    return this.formRegister.get('mail').invalid && this.formRegister.get('mail').touched;
  } 
 
  get invalidPassword1(){
    return this.formRegister.get('password1').invalid && this.formRegister.get('password1').touched;
  }

  get invalidPassword2(){
    const password1 = this.formRegister.get('password1').value;
    const password2 = this.formRegister.get('password2').value;

    return (( this.formRegister.get('password1').invalid && this.formRegister.get('password2').touched ) || password1 !== password2 ) ? true : false;
  }
  
  get isProte(){
    return this.formRegister.get('prote').value;
  }

  get invalidName(){
    return this.formRegister.get('name').invalid && this.formRegister.get('name').touched && (this.formRegister.get('prote').value);
  }
 
  get invalidBankAccount(){
    return this.formRegister.get('bankAccount').invalid && this.formRegister.get('bankAccount').touched && (this.formRegister.get('prote').value);
  }

  get invalidProvince(){
    return this.formRegister.get('province').invalid && this.formRegister.get('province').touched && (this.formRegister.get('prote').value);
  }

  get invalidHoneyPot(){
    return this.formRegister.get('honeyPot').invalid || this.formRegister.get('honeyPot').dirty;
  }

   

  crearFormulario(){
    this.formRegister = this.fb.group({
      mail       : ['', [Validators.required, Validators.pattern(this.emailPattern)]],                                                        
      password1  : ['', [Validators.required, Validators.minLength(8)]],
      password2  : ['', [Validators.required]],
      name       : ['', [Validators.required, Validators.minLength(3)]],
      prote      : ['', []],
      bankAccount: ['', [Validators.required]],
      province   : ['', [Validators.required]],
      honeyPot   : ['', [Validators.maxLength(0)]]
      
    });
    
  }
   
  crearListers() { 
      this.formRegister.valueChanges.subscribe( valor => {
        console.log(valor);
    });
  }

  enviar(){
    console.log(this.formRegister)
    console.log(this.formRegister.value)
  
    if ( this.formRegister.invalid ){
      return Object.values( this.formRegister.controls ).forEach( control => {
        control.markAsTouched();
        
      });
    } else if ( this.formRegister.valid ) {
      alert("Se ha registrado correctamente."); 
      this.formRegister.reset(); //Con esto limpiamos el formulario
    }
      
  }

} 
