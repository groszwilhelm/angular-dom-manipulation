import { Component, ViewChild, ComponentRef, AfterViewChecked, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  @ViewChild(ProductComponent, { static: true, read: ComponentRef }) productComponentRef: ComponentRef<ProductComponent>;
  @ViewChildren(ProductComponent) productQueryList: QueryList<ProductComponent>;

  public show = true;

  ngAfterViewChecked() {
    console.log(this.productQueryList.length);
  }

  public removeComponent() {
    document.querySelector('app-product').remove();
  }
}
