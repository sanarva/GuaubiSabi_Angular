import { Component, OnInit }                                from '@angular/core';
import { FormGroup, FormBuilder, Validators }               from '@angular/forms';
import { faPhoneSquare , faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 
      
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html', 
  styleUrls: ['./contact.component.css']
}) 
export class ContactComponent implements OnInit {
  iconPhoneSquare = faPhoneSquare; 
  iconMailSquare  = faEnvelopeSquare;
  iconMarker      = faMapMarkerAlt;

  formContact: FormGroup;
    
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  nameSelected:string;
  mailSelected:string; 
  subjectSelected:string;
  commentSelected:string;
 
  constructor( private fb: FormBuilder) { 
    this.crearFormulario();
  }  
  
  ngOnInit(): void {
  }
   
  get invalidName(){
    return this.formContact.get('name').invalid && this.formContact.get('name').touched
  }

  get invalidMail(){
    return this.formContact.get('mail').invalid && this.formContact.get('mail').touched
  }
 
  get invalidSubject(){
    return this.formContact.get('subject').invalid && this.formContact.get('subject').touched
  }
  
  get invalidComment(){
    return this.formContact.get('comment').invalid && this.formContact.get('comment').touched
  }

  get invalidHoneyPot(){
    return this.formContact.get('honeyPot').invalid || this.formContact.get('honeyPot').dirty
  }

  crearFormulario(){
    this.formContact = this.fb.group({
      name     : ['', [Validators.required, Validators.minLength(3)]],
      mail     : ['', [Validators.required, Validators.pattern(this.emailPattern)]],                                                        
      subject  : ['', [Validators.required]],
      comment  : ['', [Validators.required, Validators.minLength(10)]],
      honeyPot : ['', [Validators.maxLength(0)]]
    });
      
  }
    
  enviar(){
    
    if ( this.formContact.invalid ){
      return Object.values( this.formContact.controls ).forEach( control => {
        control.markAsTouched();
        
      });
    } else if ( this.formContact.valid ) {
      console.log(this.formContact)
      alert("Su mensaje ha sido enviado correctamente.");
      this.formContact.reset(); //Con esto limpiamos el formulario
    }
    
  }

} 
