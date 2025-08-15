import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from "../invoice-item/invoice-item.component";

@Component({
  selector: 'invoice-details-view',
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-details-view.component.html',
})
export class InvoiceDetailsViewComponent {
  @Input() items!: InvoiceItem[];
}
