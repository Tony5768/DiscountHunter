import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {ProductService} from '../../service/product.service'
import {ProductData} from '../../models/product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  public id: string = ''
  public productItem: any = null

  constructor(private product: ProductService,  private route: ActivatedRoute,   private router: Router) {
}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']
    })
    this.product.getProductById(this.id).then((data: any) => {
      this.productItem = data
      console.log(data)
    })
  }

  onBack(): void {
    this.router.navigate(['/'])
  }
}

