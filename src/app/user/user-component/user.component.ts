import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../shared/services/repository.service';
import { User } from './../../_interfaces/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[];

  constructor(private repository: RepositoryService) { }

  ngOnInit()
  {
    this.getAllUsers();
  }

  public getAllUsers() {
    let apiAddress: string = "api/user";
    this.repository.getData(apiAddress)
      .subscribe(res => {
        this.users = res as User[];
      })
  }

}
