import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() isType:  'submit' | 'cancel' = 'submit';
  @Input() isClass: 'primary' | 'alt' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
