import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() public  title:string = "Bem vindo";

  constructor(){}
  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso")
  }

}
