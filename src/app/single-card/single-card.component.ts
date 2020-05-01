import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {
  @Input() imagUrl: string;
  @Input() title: string;
  @Input() username: string;
  @Input() content: string;
  constructor() {}

  ngOnInit(): void {}
}
