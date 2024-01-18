import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    // console.log('before ',this.isUserLoggedIn());
    if (username === 'manohar' && password === 'manohar123') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ',this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user;
    try {
      user = sessionStorage.getItem('authenticatedUser');
    } catch (ref) {}

    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
