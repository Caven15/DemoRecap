import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/services/fake-auth.service';

@Component({
  selector: 'app-fake-login',
  templateUrl: './fake-login.component.html',
  styleUrls: ['./fake-login.component.scss']
})
export class FakeLoginComponent implements OnInit {

  fakeLoginForm! : FormGroup

  constructor(
    private _router : Router,
    private _formBuilder : FormBuilder,
    private _fakeAuth : FakeAuthService,
  ) { }

  ngOnInit(): void {
    this.fakeLoginForm = this._formBuilder.group({
      email : [null, Validators.required]
    })
  }

  onSubmit() : void{
    if (this.fakeLoginForm.valid) {
      const email = this.fakeLoginForm.value['email']
      this._fakeAuth.fakeLogin(email)
      this._router.navigate(['home'])
    }
  }
}
