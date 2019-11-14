import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  star: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges() {
    this.star = this.rating * 75 / 5;
  }
}
