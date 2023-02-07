import { Component } from '@angular/core';
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
  acno=''
  psw=''
constructor(private router:Router,private ds: DataService){}
login(){
  var acnum=this.acno
  var psw=this.psw
 const result= this.ds.login(acnum,psw)
 if(result){
  alert('login sucesss')
  this.router.navigateByUrl('dashboard')
 }
 else{
  alert('incorrect password or acno')
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
