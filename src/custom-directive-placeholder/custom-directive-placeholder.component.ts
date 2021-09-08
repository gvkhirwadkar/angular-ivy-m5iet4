import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive-placeholder',
  templateUrl: './custom-directive-placeholder.component.html',
  styleUrls: ['./custom-directive-placeholder.component.css']
})
export class CustomDirectivePlaceholderComponent implements OnInit {
  constructor() {}

  randomArray = [
    { firstName: 'Ganesh', lastName: 'Khirwadkar', age: 38 },
    { firstName: 'Amrita', lastName: 'Khirwadkar', age: 40 },
    { firstName: 'Amresh', lastName: 'Khirwadkar', age: 10 }
  ];

  ngOnInit() {}
}
