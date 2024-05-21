import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashboardLayout';


  // Storage Analysis by User

  // Input - Name
  // Response from Backend
  private storageDataFromBackend = {
    // Last 7 Days Storage used Data (Array Size - 7)
    chartData: [
      {
        "date": "12/10",
        "storageUsed": 10,
      },
      {
        "date": "13/10",
        "storageUsed": 20,
      },
      {
        "date": "14/10",
        "storageUsed": 18,
      },
      {
        "date": "15/10",
        "storageUsed": 32,
      },
      {
        "date": "16/10",
        "storageUsed": 9,
      },
      {
        "date": "17/10",
        "storageUsed": 25,
      },
      {
        "date": "18/10",
        "storageUsed": 15,
      },
    ],
    storage : {
      total : 100,
      used : 25
    },
    pipelines : {
      total : 200,
      running : 125
    },
    containers : {
      total : 50,
      running : 10
    },
    analysis : {
      total : 10,
      completed : 5
    }
  }


  // JSON Object Data from the Backend
  private dataFromBackend =
    {
      // Top 10 Names of Users
      names: ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8', 'Name9', 'Name10',],
      // Data Related to Top 10 User names provided above, data must be in the same order as of the names provided
      chartData: [
        {
          //Name for the Type of Container
          type: "Notebook",
          //Number of Containers running of 10 users of particular Category(Name) in same order as names array provided above.
          //Data Array size will always be equal to 10
          data: [100, 302, 301, 334, 390, 330, 320, 433, 234, 239]
        },
        {
          type: "GUI",
          data: [320, 132, 101, 134, 90, 230, 210, 143, 234, 239]
        },
        {
          type: "BLAST",
          data: [220, 182, 191, 234, 290, 330, 310, 243, 234, 239]
        },
        {
          type: "Code",
          data: [150, 212, 201, 154, 190, 330, 410, 143, 234, 239]
        }
      ]
    }



}
