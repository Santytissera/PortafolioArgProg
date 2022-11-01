import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  educacionList:any
  experienciaList:any

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList=data.educacion;
    });

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experienciaList=data.experiencia;
    });

  }

}
