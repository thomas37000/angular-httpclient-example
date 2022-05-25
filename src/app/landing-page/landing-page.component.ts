import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css', '../app.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickRessources() {
    this.router.navigateByUrl('ressources');
  }

  onClickNext() {
    this.router.navigateByUrl('next-steps');
  }
}
