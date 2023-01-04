import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})


export class DataBindingComponent implements OnInit {
  public nome: string = "Alan";
  public idade: number = 25;
  public checkedDisabled: boolean = false;
  public srcImg: string = "https://avatars.githubusercontent.com/u/51389025?v=4";
  public srcTitle: string = "Property Binding";

  public position: { x: number, y: number} = { x: 0, y: 0 };

  public alertaInfo(valor: MouseEvent): void{
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent): void{
    console.log(valor)
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY
  }
  constructor(){};

  ngOnInit(): void {

  };
}
