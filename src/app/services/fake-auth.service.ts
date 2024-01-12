import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  constructor() { }

  fakeLogin(emailValue : string) : void{
    // construire json
    sessionStorage.setItem('email', JSON.stringify(emailValue))
  }

  logout() : void{
    sessionStorage.clear()
  }

  isConnected() : boolean{
    // D2construire le json
    const email = JSON.parse(sessionStorage.getItem('email'))
    if (!email) {
      return false
    }
    else{
      return true
    }
  }

  getEmailConnected(): string | null{
    return JSON.parse(sessionStorage.getItem('email'))
  }
}
