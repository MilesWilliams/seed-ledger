import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() onClose: EventEmitter<boolean>  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal() {    
    return this.onClose.emit(true);
  }

}
