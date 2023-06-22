import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  

  categories = [
    { url: '../../../assets/img/Trator.svg', title: 'Tratores' },
    { url: '../../../assets/img/Implementos.svg', title: 'Implementos' },
    { url: '../../../assets/img/Pneus.svg', title: 'Pneus' },
    { url: '../../../assets/img/Locacao.svg', title: 'Locação' },
    { url: '../../../assets/img/Pecas.svg', title: 'Peças' },
    { url: '../../../assets/img/Caminhoes.svg', title: 'Caminhões' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
