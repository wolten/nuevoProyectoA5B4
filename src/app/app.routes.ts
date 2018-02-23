import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './components/home/home.component';

const APPROUTES: Routes = [
 { path: 'home', component:  HomeComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// tslint:disable-next-line:eofline
export const APP_ROUTER = RouterModule.forRoot(APPROUTES);