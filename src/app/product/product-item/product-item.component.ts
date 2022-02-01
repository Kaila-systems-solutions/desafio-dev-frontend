import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  produtos!: { nome: any; preco: any; image: any; }[];
  constructor() { }

  ngOnInit() {
    this.produtos = new Array<{ nome: any, preco: any, image: any}>();

    this.produtos.push({ nome: 'Controle Remoto', preco: 16000, image: '../../../assets/images/new_1.jpg'});
    this.produtos.push({ nome: 'Leitor de Músicas', preco: 12000, image: '../../../assets/images/new_2.jpg'});
    this.produtos.push({ nome: 'Relógio Intéligente', preco: 23000, image: '../../../assets/images/new_3.jpg'});
    this.produtos.push({ nome: 'Mouse sem Fio', preco: 5000, image: '../../../assets/images/new_4.jpg'});
    this.produtos.push({ nome: 'Rádio', preco: 10000, image: '../../../assets/images/new_5.jpg'});

  }

}
