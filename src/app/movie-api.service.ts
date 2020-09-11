import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class MovieApiService {

  constructor(private httpClient : HttpClient) { }
  url = "https://api.themoviedb.org/3/"
  async get(path, options?): Promise<any>{
    return await this.httpClient.get(this.url + path + "&api_key=f2187dacfb405791e3765f885a8a5ed2",options).toPromise();
  }

}