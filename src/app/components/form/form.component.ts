import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public errorUser!: string;
  public errorMessage!: string;

  constructor() { }

  ngOnInit(): void {
    this.errorUser = "Vous devez écrire votre nom pour valider le formulaire !";
    this.errorMessage = "Vous devez écrire un message pour valider le formulaire!";
  }

}
