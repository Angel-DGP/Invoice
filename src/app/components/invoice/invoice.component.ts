import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { CustomerViewComponent } from "../customer-view/customer-view.component";
import { InvoiceDetailsViewComponent } from "../invoice-details-view/invoice-details-view.component";

@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetailsViewComponent],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;
  constructor(private service: InvoiceService) {}
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
