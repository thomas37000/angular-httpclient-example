import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css'],
})
export class IssComponent implements OnInit {

  li: any;
  lis = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(' http://api.open-notify.org/iss-now.json')
      .subscribe((data) => {
        console.log(data);
        this.li = data;
        this.lis = this.li.list;
      });
  }
}
