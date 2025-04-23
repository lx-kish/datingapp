import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'DatingApp';

  ngOnInit(): void {
    const address = `https://localhost:5001/api/members`
    this.http.get(address).subscribe({
      next: response => console.log(response),
      error: error => console.log(error),
      complete: () => console.log(`http request ${address} completed`)
    })
  }
}
