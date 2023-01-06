import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit{
  public condition: boolean = true
  public conditionClick: boolean = true
  public nome: string = 'alan'
  public list: Array< {nome: string} > = [{nome: 'Aline'}, {nome: 'Shishido'}, {nome: 'Hideyuki'},{nome: 'Alan'}]


  constructor(){}

  ngOnInit(): void {
    setInterval(  ()=>{
      this.condition = !this.condition
    }, 1000)
  }

  public onClick(){
    this.conditionClick = !this.conditionClick
  }

  public onClickAddList() {
    this.list.push({nome: 'Novo Usuario'})
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }
}
