import { Routes } from '@angular/router';
import { AyrenComponent } from './ayren/ayren.component';
import { HomeComponent } from './home/home.component';
import { ThomasPageComponent} from './thomas-page/thomas-page.component'
import { JoshuaComponent } from './Joshua_Page/joshua.component';

export const routes: Routes = [
        {
          path: '',
          component: HomeComponent
      },
      {
        path: 'Ayren',
        component: AyrenComponent
      },
      {
        path: "Thomas",
        component: ThomasPageComponent
      },
      {
        path: "Joshua",
        component: JoshuaComponent
      }
];
