import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public infos: any = {
      revenue: '230 000 000 тг',
      expenses: '234 000 тг/мес',
      borrowed_funds: '0',
      stock_balance: '0',
      room_status: 'в аренде',
      share: '100%',
      staff: '8',
      market: '3 года',
      payback: '7 месяцев',
      file_name: 'Название файла и еще длинный заголовок.pdf'
    };

  constructor() { }

  ngOnInit(): void {
  }
}
