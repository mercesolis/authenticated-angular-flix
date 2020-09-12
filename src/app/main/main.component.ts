import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AuthenticationService } from '../authentication.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: any;
  invalidLogin: boolean;
  constructor(private movieService: MovieService, private authService: AuthenticationService){}
  ngOnInit(): void {
    this.myMovieList = this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
  }
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';

  async logout(username: string, password: string): Promise<void> {
    localStorage.removeItem(this.user);
    const response = await this.logout;
  }
}

