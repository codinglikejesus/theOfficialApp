import { Component } from '@angular/core';
import { Http2SecureServer } from 'http2';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  login() {
    this.http.get(
      'https://accounts.spotify.com/authorize?client_id=86dab2ec88ef49cb98f1f308a7eecb7a&response_type=token&redirect_uri=localhost%3A8100%2Flist')
      .subscribe(res => {
      console.log(res);
    });
  }

}
