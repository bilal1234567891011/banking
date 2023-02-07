import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser:any
currentAcno:any
  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0, transaction: [] },
    1001:{acno:1001,username:"amal",password:"abc123",balance:0,transaction: [] },
    1003:{acno:1003,username:"arun",password:"abc123",balance:0,transaction: [] },
    1004:{acno:1004,username:"akil",password:"abc123",balance:0,transaction: [] }
  }
  register(uname:any,acno:any,psw:any){
if(acno in this.userDetails){  
  return false
}
else{
this.userDetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
console.log(this.userDetails);

return true
}
  }
  login(acno:any,psw:any){

    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
       this.currentUser=userDetails[acno]["username"]
      //  console.log(this.currentUser);
      this.currentAcno=acno
       
      return true
  }
      else{
        return false
      }
  
    }
    else{
    return false
    }
    // alert('login clicked')
  
  }
  deposit(acnum:any,password:any,amount:any){
    let userDetails=this.userDetails

    //convert string ammount to number
   var amnt= parseInt(amount)
   if(acnum in userDetails){
    if(password==userDetails[acnum]["password"]){

      //update balance
      userDetails[acnum]["balance"]+=amnt

//transaction data store
userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

      //return current balance
      return  userDetails[acnum]["balance"]
    }
    else{
      return false
    }

   }
   else{
    return false
   }
  }
  withdraw(acnum1:any,password1:any,amount1:any){
    let userDetails= this.userDetails
    var amnt2= parseInt(amount1)


    if(acnum1 in userDetails){
      if(password1==userDetails[acnum1]["password"]){
        if(amnt2 <= userDetails[acnum1]["balance"]){
        userDetails[acnum1]["balance"]-=amnt2
        userDetails[acnum1]["transaction"].push({Type:"DBEIT",amount:amount1})
console.log(userDetails);


        //return current balance
        return userDetails[acnum1]["balance"]
        }
        else{
          alert('insufficent balance')
          return false
        }
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('incorrect acno')
      return false
    }

  }
  getTransaction(acno:any){

    return this.userDetails[acno]["transaction"]
  }
  
  };
  
  

