import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products:any=[];
  rest:RestService;

  constructor(rest:RestService, private route: ActivatedRoute, private router: Router) { 
    this.rest = rest
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.products = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data)
      this.products = data;
    })
  }

  add(){
    this.router.navigate(['/product-add'])
  }

}
