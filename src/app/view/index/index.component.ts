import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public imagemIndex = 'assets/index.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
