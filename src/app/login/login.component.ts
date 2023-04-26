import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  data="your perfect panking partener"
  inputplaceholder="Account Number"
constructor(private router:Router,private ds: DataService,private fb:FormBuilder ){}
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})
login(){
  var acnum=this.loginForm.value.acno
  var psw=this.loginForm.value.psw
  if(this.loginForm.valid){
  this.ds.login(acnum,psw).subscribe((result:any)=>{

    localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
    localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
    localStorage.setItem("token",JSON.stringify(result.token))

    alert(result.message)
    this.router.navigateByUrl('dashboard')
  },
  result=>{
    alert(result.error.message)
  }
  )

}
else{
  alert("invalid form")
}
}

// login(a:any,b:any){

//   // var acnum=a.value
//   // var psw=b.value
//   // var userDetails=this.userDetails
//   // if(acnum in userDetails){
//   //   if(psw==userDetails[acnum]["password"]){
//   //   alert("login sucess")}
//   //   else{
//   //     alert("incorrect password")
//   //   }

//   // }
//   // else{
//   //   alert("acno is incorrect or not registerd yet")
//   // }
//   // alert('login clicked')

// }


// acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
  
// }
// pswrdChange(event:any){
//   this.psw=event.target.value
//   // console.log(this.psw);
  
  
// }
}
