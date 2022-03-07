import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public number: string="0";
  public firstNumber=null;
  public value: number=0;  //v
  public counter: boolean=false;
  public operator= null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  numberString(value:string){
    if(this.counter){
      this.number=value;
      this.counter=false;
    } else {
      this.number === '0' ? this.number = value: this.number += value;
    }
     console.log(this.number);
  }
  calculater(operation, secondNumber){
    switch(operation){
        case "+" : return this.firstNumber += secondNumber;
        case "-" : return this.firstNumber -= secondNumber;
        case "/" : return this.firstNumber /= secondNumber;
        case "*" : return this.firstNumber *= secondNumber;
        case "=" : return secondNumber;
    }

    
  }
  doOperation(operation:string){
    if(this.firstNumber===null){
      this.firstNumber=Number(this.number);
    } else if(this.operator){
      const sonuc = this.calculater(this.operator,Number(this.number));
      this.number=String(sonuc);
      this.firstNumber=sonuc;
    }
    this.counter=true
    this.operator=operation;
    console.log(operation);
  }

  clear(){
    this.number="0";
    this.firstNumber=null;
    this.value=0;  //v
    this.counter=false;

  }

  semicolon(){
    if(!this.number.includes('.')){
      this.number += '.'; 
  }
  }
}
