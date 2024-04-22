import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  constructor() { }
  
  ngOnInit() {

  }

  // ContentChild decorator is used to give the instance of the component present in the container
  @ContentChild(EmployeeComponent) emp : EmployeeComponent;

  // This will be called when all the components in the container are rendered completely
  ngAfterContentInit(): void {
    console.log(this.emp);
    // this.emp.name = "Arpit"
    
  }

}
