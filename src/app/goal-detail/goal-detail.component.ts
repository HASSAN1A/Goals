import { Goal } from './../goal';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete: boolean) {
    this.isComplete.emit(complete);
  } goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
