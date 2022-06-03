import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { User } from 'src/app/model/User';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
 // public usersList: any[];
 // public usersList: User[];

//  public usersList: Users[];
 public personnes: Personne[];

  constructor() {

    this.personnes = [
      new Personne("Morane", "Bob"),
      new Personne("al'Thor", "Rand"),
    ];

    // this.usersList = [  
    //   {
    //     id: 1,
    //     name: 'thomas',
    //     devLanguage: 'Java - Angular',
    //     startProgramming: 2018,
    //     age: 41,
    //     location: 'Nantes',
    //     avatar:
    //       'https://static.wixstatic.com/media/05afef_bc7a05fc75d0448b8d64aabfa1955c07~mv2.jpg/v1/crop/x_20,y_0,w_343,h_480/fill/w_248,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1033_JPG.jpg',
    //   },
    //   {
    //     id: 2,
    //     name: 'Mark Zuckerberg',
    //     devLanguage: 'Javascript - React',
    //     startProgramming: 2004,
    //     age: 38,
    //     location: 'Palo Alto',
    //     avatar:
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/260px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg',
    //   },
    //   {
    //     id: 3,
    //     name: 'Bill Gates',
    //     devLanguage: 'C++',
    //     startProgramming: 1975,
    //     age: 66,
    //     location: 'Washington',
    //     avatar:
    //       'https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg',
    //   },
    // ];

    // this.usersList = [
    //   {
    //     _id: 1,
    //     _name: 'thomas',
    //     _devLanguage: 'Java - Angular',
    //     _startProgramming: 2018,
    //     _age: 41,
    //     _location: 'Nantes',
    //     _avatar:
    //       'https://static.wixstatic.com/media/05afef_bc7a05fc75d0448b8d64aabfa1955c07~mv2.jpg/v1/crop/x_20,y_0,w_343,h_480/fill/w_248,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1033_JPG.jpg',
    //   },
    //   {
    //     _id: 2,
    //     _name: 'Mark Zuckerberg',
    //     _devLanguage: 'Javascript - React',
    //     _startProgramming: 2004,
    //     _age: 38,
    //     _location: 'Palo Alto',
    //     _avatar:
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/260px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg',
    //   },
    //   {
    //     _id: 3,
    //     _name: 'Bill Gates',
    //     _devLanguage: 'C++',
    //     _startProgramming: 1975,
    //     _age: 66,
    //     _location: 'Washington',
    //     _avatar:
    //       'https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg',
    //   },
    // ];
  }

  ngOnInit(): void {}
}
