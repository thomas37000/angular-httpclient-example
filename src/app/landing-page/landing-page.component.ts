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

  public onClickRessources(): void {
    this.router.navigateByUrl('ressources');
  }

  public onClickNext(): void {
    this.router.navigateByUrl('next-steps');
  }
}
