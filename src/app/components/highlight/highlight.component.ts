import { Product } from 'src/app/modules/product';
import { CloverIndustryService } from './../../services/clover-industry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
  preserveWhitespaces: true,
})
export class HighlightComponent implements OnInit {
  
  products: Product[] = []; // Array para armazenar os produtos

  images = [
    'Highlight.svg',
    'Highlight-1.svg',
    'Highlight-2.svg'
  ];
  
  constructor(private service: CloverIndustryService) { }

  ngOnInit(): void {
    try {
      // Chamar o método getAllProducts() do serviço para obter os produtos
      this.service.getAllProducts().subscribe(
        (data) => {
          this.products = data; // Atribuir os produtos retornados à propriedade 'products'
        }
      );
    } catch (error) {
      console.log(error); // Exibir o erro no console, caso ocorra algum
    }
  }

}
