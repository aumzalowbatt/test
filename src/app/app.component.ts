import { Component, TemplateRef, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  name = 'Angular';
  private stepper: Stepper;
  taxData: any = {
    month: '',
    year: ''
  };
  filingTypes = [
    {key: "0", value: "Ordinary Filing"},
    {key: "1", value: "Additional Filing"}
  ]
  month:any;
  months = [
    {key: "01", value: "January"},
    {key: "02", value: "February"},
    {key: "03", value: "March"},
    {key: "04", value: "April"},
    {key: "05", value: "May"},
    {key: "06", value: "June"},
    {key: "07", value: "July"},
    {key: "08", value: "August"},
    {key: "09", value: "September"},
    {key: "10", value: "October"},
    {key: "11", value: "November"},
    {key: "12", value: "December"},
  ];
  years = ["2020","2021","2022","2023"]
  Form: FormGroup;
  modalRef:any;
  step;
    constructor(private modalService: NgbModal){
    }
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true,
    })
    this.step = 1;
    this.taxData.filingType = '0';
    console.log(this.stepper);
    
  }

  next() {
    if(!this.taxData.month || !this.taxData.year || !this.taxData.filingType || !this.taxData.saleAmount || !this.taxData.taxAmount){
      alert('Invalid Data');
    } else {
      this.stepper.next();
      this.taxData.month = this.months.find(f => f.key == this.taxData.month)
      this.taxData.filingType = this.filingTypes.find(f => f.key == this.taxData.filingType)
      this.step = 2;
    }
    
  }  

  @ViewChild('Confirm') Confirm: TemplateRef<any>;
    openModal() {
        const params = {
            windowClass: 'alert-modal capture-modal',
            size: 'lg',
            centered: true,
            scrollable: true,
            backdrop: 'static',
            keyboard: false
        } as any;
        this.modalRef = this.modalService.open(this.Confirm, params);
    }

  changefilingType(){
    this.taxData.surcharge = 0;
    this.taxData.penalty = 0;
  }

  changesaleAmount(){
    this.taxData.saleAmount = +this.taxData.saleAmount;
    this.taxData.taxAmount = +(+this.taxData.saleAmount*0.07).toFixed(2);
    this.taxData.surcharge = +(+this.taxData.taxAmount*0.01).toFixed(2);
    this.taxData.penalty = 200;
    this.taxData.totalAmount = +(+this.taxData.taxAmount+(+this.taxData.surcharge)+(+this.taxData.penalty)).toFixed(2);
  }

  changetaxAmount(){
    this.taxData.saleAmount = +(+this.taxData.taxAmount/0.07).toFixed(2);
    this.changesaleAmount();
  }

  back() {
    this.stepper.previous();
    this.step = 1;
    this.taxData.month = this.taxData.month.key;
    this.taxData.filingType = this.taxData.filingType.key;
  }

}
