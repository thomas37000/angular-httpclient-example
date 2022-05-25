import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextStepsComponent } from './components/next-steps/next-steps.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'ressources', component: RessourcesComponent },
    { path: 'next-steps', component: NextStepsComponent },
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

