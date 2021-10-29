import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthenticateUser } from 'src/app/core/store/actions/auth.actions';

@Component({
  selector: 'sl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }

  public loginUser() {
    return this.store.dispatch(new AuthenticateUser({email_address:'',password:''}))
  }

}
