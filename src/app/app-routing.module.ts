import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextStepsComponent } from './components/next-steps/next-steps.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { UserComponent } from './components/user/user.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'ressources', component: RessourcesComponent },
    { path: 'next-steps', component: NextStepsComponent },
    { path: 'user', component: UserComponent },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class AppRoutingModule {}

