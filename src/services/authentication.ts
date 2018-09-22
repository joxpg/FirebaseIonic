import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
const indentifier ="token";
@Injectable()

export class Authentication{
    public token :string;

constructor(private angularAuth :AngularFireAuth){
    this.setUp();

}
logOut()
{
   
  
    return this.angularAuth.auth.signOut().then(()=>{
        this.token=null;
    });

}
setUp(){
    this.token = this.getTokentFromLS();     
    this.angularAuth.authState.subscribe((firebaseUser)=>{
    console.log("firebaseUser");
    if(firebaseUser)
     {
        localStorage.setItem(indentifier,firebaseUser.uid);
        this.token=firebaseUser.uid;
    }else{
    localStorage.removeItem(indentifier);
    this.token=null;
    }

});
}
getTokentFromLS(): string{
    return localStorage.getItem(indentifier)

}

createUserWithEmailAndPassword(email,password){

    return this.angularAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
}

createUserWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    return this.angularAuth.auth.signInWithRedirect(provider).then(result=>{
        return firebase.auth().getRedirectResult() 

    });
}


createUserWithFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    return this.angularAuth.auth.signInWithRedirect(provider).then(result=>{
        return firebase.auth().getRedirectResult() 

    });
}
}


