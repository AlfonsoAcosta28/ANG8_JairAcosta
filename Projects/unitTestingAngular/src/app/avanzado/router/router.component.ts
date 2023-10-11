import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit{

  id!: string
  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => this.id = params['id'])
  }

  save(){
    this.router.navigate(['medicos','123'])
  }
}
