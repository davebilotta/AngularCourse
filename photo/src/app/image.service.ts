import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs"

const accessKey = '-heHIFo_kY3oTzjfP5EmloUwA-sUDI3eriaJAFhe7t8';
const secretKey = 'gGB-sHXSITiTk-W2tth3KS0AJFubgicMN5m1n74LG44';

interface UnsplashImageResponse {
  id: string,
  alt_description: string,
  urls: {
    regular: string,
    small: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }

  getImage() {
    /* Searches for a random image on unsplash */

    return this.http.get<UnsplashImageResponse>(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}`)
      .pipe(
        map(response => response)
      )
  }
}
