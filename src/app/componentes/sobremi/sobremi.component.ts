import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobremiList:any
  interesList:any

  constructor( private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.sobremiList=data.datosPersonales;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.interesList=data.intereses
    });
  }

}
