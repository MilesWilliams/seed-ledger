import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddNewSeed } from '../../store/actions/seed.actions';

@Component({
  selector: 'sl-add-seed',
  templateUrl: './add-seed.component.html',
  styleUrls: ['./add-seed.component.scss']
})
export class AddSeedComponent implements OnInit {
  @Output() onClose:EventEmitter<boolean> = new EventEmitter();
  public showModal: boolean = true;
  public newSeedForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.newSeedForm = this.fb.group({
      wallet_name: this.fb.control('', Validators.required),
      platform_link: this.fb.control(''),
      phrase: this.fb.control('', Validators.required)
    });

  }

  public closeModal() {
    this.onClose.emit(true);
  }

  public onSubmit() {
    if (!this.newSeedForm.valid) return;
    this.store.dispatch(new AddNewSeed(this.newSeedForm.getRawValue()));
    this.closeModal();
  }

}
