import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {

  @Input() productData: any = { name: '', description: '', quantity: 0 };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productData = data;
    });
  }

  updateProduct() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
