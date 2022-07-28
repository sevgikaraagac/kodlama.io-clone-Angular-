import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-cart',
  templateUrl: './course-cart.component.html',
  styleUrls: ['./course-cart.component.css']
})
export class CourseCartComponent implements OnInit {

  @Input() imgUrl!:string;
  @Input() title!:string;
  @Input() progress!:string

  constructor() { }

  ngOnInit(): void {
  }

}
