import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {


  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {

  }

  navigationHome(){
    this.router.navigate(['', '/']);
  }

}
