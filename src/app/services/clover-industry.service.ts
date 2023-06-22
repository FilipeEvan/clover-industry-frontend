import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloverIndustryService {

  private readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Obter todos os produtos
  public getAllProducts(): Observable<Product[]> {
    // try {
    //   // Tentar fazer a chamada HTTP para obter os produtos da API
    //   return this.http.get<any>(this.API + '/products').pipe(
    //     map((response: any) => response.content)  // Mapear a resposta para extrair o conteúdo dos produtos
    //   );
    // } catch (error) {
    //   // Capturar e tratar qualquer erro ocorrido durante a chamada HTTP
    //   console.log(error);
    //   // Retornar uma nova Observable com um erro personalizado para notificar que ocorreu um erro ao recuperar os produtos
    //   return new Observable<Product[]>(observer => {
    //     observer.error('Erro ao recuperar produtos');
    //   });
    // }

    // Tentar fazer a chamada HTTP para obter os produtos da API
    return new Observable<Product[]>(observer => {
      fetch(this.API + '/products')
        .then(response => response.json())  // Converter a resposta em formato JSON para um objeto TypeScript
        .then(data => {
          observer.next(data.content); // Emitir os produtos para o observador
          observer.complete(); // Completar a Observable
        })
        .catch(error => {
          observer.error('Erro ao recuperar produtos'); // Emitir um erro personalizado para o observador
        });
    });
  }

}
