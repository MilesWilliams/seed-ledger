import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Seed } from 'src/app/features/dashboard/interfaces/seed.interface';
import { Utils } from 'src/app/utils';
import { SetSelectedSeed } from '../../store/actions/seed.actions';
import { SeedState } from '../../store/state/seed.state';

@Component({
  selector: 'sl-seed-vault',
  templateUrl: './seed-vault.component.html',
  styleUrls: ['./seed-vault.component.scss']
})
export class SeedVaultComponent implements OnInit {
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];
  public showAddSeedModal: boolean = false;
  public seeds$: Observable<Seed[]> = this.store.select(SeedState.all);
  public selectedSeed$: Observable<Seed> = this.store.select(SeedState.selectedSeed);
  public uploadedFileUrl: any;

  public dummySeeds: Seed[] = [
    {
      id: '1',
      platform: {
        id: '1',
        name: 'Shapeshift',
        link: 'https://wwww.shapeshift.com',
        logo: 'https://cdn6.aptoide.com/imgs/9/d/f/9df2685ab75800c2832264e3ec6ec7f8_icon.png'
      },
      phrase: 'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      created_date: new Date().toISOString(),
      edited_date: new Date().toISOString()
    },
    {
      id: '2',
      platform: {
        id: '2',
        name: 'ledn',
        link: 'https://wwww.ledn.io',
        logo: 'https://pbs.twimg.com/profile_images/1311389264098271232/rVE9njHu_400x400.jpg'
      },
      phrase: 'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      created_date: new Date().toISOString(),
      edited_date: new Date().toISOString()
    },
    {
      id: '3',
      platform: {
        id: '3',
        name: 'blockchain',
        link: 'https://wwww.blockchain.com',
        logo: 'https://play-lh.googleusercontent.com/CcboHyK1Id9XQWa8HXb_81Rvgqy7J816OHiTcGlezcwC-tx4cnrrXPx1x6cR0PowqA'
      },
      phrase: 'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      created_date: new Date().toISOString(),
      edited_date: new Date().toISOString()
    }
  ]
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public copyToClipboard(text: string) {
    return Utils.Helpers.copyToClipboard(text);
  }

  public selectSeed(id: string) {
    return this.store.dispatch(new SetSelectedSeed(id));
  }

  public listSeedWords(phrase: string) {
    const fmtPhrase = phrase.replace(/[^\w\s]|_/g, '')
    return fmtPhrase.split(' ');
  }

  onLogoUpload(file) {
    if (file.length === 0)
      return;

    const mimeType = file[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    // this.imagePath = file;
    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.uploadedFileUrl = reader.result;
    }
  }

}
