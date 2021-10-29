import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewSeed } from 'src/app/features/dashboard/pages/seed-vault/interfaces/new-seed.interface';

import { Seed } from '../../features/dashboard/interfaces/seed.interface';

@Injectable({
  providedIn: 'root'
})
export class SeedsService {

  constructor(private _http: HttpClient) { }

  public fetchSeeds(): Observable<Seed[]>  {
    const dummySeeds: Seed[] = [
      {
        id: '1',
        platform: {
          id: '1',
          name: 'Shapeshift',
          link: 'https://www.shapeshift.com',
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
          link: 'https://www.ledn.io',
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
          link: 'https://www.blockchain.com/',
          logo: 'https://play-lh.googleusercontent.com/CcboHyK1Id9XQWa8HXb_81Rvgqy7J816OHiTcGlezcwC-tx4cnrrXPx1x6cR0PowqA'
        },
        phrase: 'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        created_date: new Date().toISOString(),
        edited_date: new Date().toISOString()
      }
    ];

    return of(dummySeeds);
  }

  public add(seedFormValues:NewSeed ) {
    const now = new Date().toDateString();
    const seed: Seed = {
      id:String(Math.random()),
      phrase: seedFormValues.phrase,
      created_date: now,
      edited_date: now,
      platform:{
        id: String(Math.random()),
        link: seedFormValues.platform_link,
        name: seedFormValues.wallet_name,
        logo: ''
      }
    }

    return of(seed);
  }
}
