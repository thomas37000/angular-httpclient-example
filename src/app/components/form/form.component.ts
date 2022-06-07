import { Component, OnInit } from '@angular/core';
import { MessageLabel } from 'src/app/model/MessageLabel';
import { Personne } from 'src/app/model/Personne';
import { AllDatasService } from 'src/app/services/all-datas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public errorUser!: string;
  public errorMessage!: string;

  constructor(private svc: AllDatasService) {}

  ngOnInit(): void {
    this.errorUser = 'Vous devez écrire votre nom pour valider le formulaire !';
    this.errorMessage =
      'Vous devez écrire un message pour valider le formulaire!';
  }

  public onSubmit(val: any): void {
    let newAuteur = val.auteur;
    let newMessage = val.message;
    console.log(val.value);
    // new MessageLabel(new Personne(nom, prenom), newMessage);
    let newMsg = new MessageLabel(new Personne('', newAuteur), newMessage);
    this.svc.addMessage(newMsg);
  }
}
