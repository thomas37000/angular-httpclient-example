import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css'],
})
export class IssComponent implements OnInit {
  list: any;
  iss_position = [];
  lat = 0;
  long = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(' http://api.open-notify.org/iss-now.json')
      .subscribe((data) => {
        //console.log(data.iss_position.latitude);
        console.log(data);
        this.list = data;
        // this.iss_position = this.iss_position.longitude;
        // this.iss_position = this.iss_position.latitude;
      });
  }
}
