import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CompnameState } from 'src/state/compname.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
  @Select(CompnameState.getStateDefault) title$!:Observable<string>
  
  ngOnInit(): void {
    this.title$.subscribe()
  }

}
