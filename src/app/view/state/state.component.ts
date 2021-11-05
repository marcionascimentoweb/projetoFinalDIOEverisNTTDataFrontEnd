import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/model/state';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  state : State | undefined;
  states : State[] = [];

  constructor(private service : StateService) {
    this.state = new State();
   }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.getStates().subscribe(res => {
      this.states = res;
    });
  }

}
