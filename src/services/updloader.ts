import { Injectable } from '@angular/core'
import * as firebase from 'firebase/app';
import { snapshotChanges } from 'angularfire2/database';
@Injectable()

export class Uploader{
    storageRef: firebase.storage.Reference
    constructor(){
        this.storageRef = firebase.storage().ref()
    }
    uploadMultiple(files)
    {
        for(let i =0 ; i<=files.length;i++){
        let file= files[i];
        }
    }
    upload(file){

        let fileRef = this.storageRef.child("/images/"+file.name);
        let uploadTask =fileRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,(snapshotChanges));
    }




}