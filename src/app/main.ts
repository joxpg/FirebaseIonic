import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as firebase from 'firebase/app';
import { firebaseconfig} from '../enviroment/firebase-config';
firebase.initializeApp(firebaseconfig);


platformBrowserDynamic().bootstrapModule(AppModule);
