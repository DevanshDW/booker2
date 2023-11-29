

import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { concatMap, tap } from 'rxjs';
// import { CreateUserGQL, CreateUserInput } from '../../../generated-types';
// import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUp({email, password}: any) {
    console.log(email, password);
  }
}