import { Component, OnInit } from '@angular/core';
import { MyServService } from 'src/allService/my-serv.service';
// import { registerables} from 'node_modules/chart.js'
import Chart from 'chart.js/auto';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { filter, pluck } from 'rxjs';
import { Program,chartSendData } from 'src/module';
import { dropdownArray } from 'src/module';
import { FormControl, FormGroup } from '@angular/forms';

// import { IDropdownSettings, IDropdownSettings, IDropdownSettings } from 'ng-multiselect-dropdown';

// Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'grp';

  // declare variable here
  dropdownList: {}[] = [];
  selectedItems: {}[] = [];
  dropdownSettings!: IDropdownSettings;

  // for 2 ........
  dropdownList2: {}[] = [];
  selectedItems2: {}[] = [];
  dropdownSettings2!: IDropdownSettings;

  myCreatedWholeArray: Program[] = [];
  dataToShowArray: any[] = [];
  tempName: any[] = [];
  tempId: any = [];

  // selected value data showing in array variables
  tempSelectedValueName: any[] = [];
  tempSelectedValueID: any[] = [];
  finalShowArrayOne:any[]=[]
  // end of it

  //second dropdown 

  mainSeconArrayWithAllData:any[]=[];


  // end of variable declaration
  ngOnInit() {
    // this.renderChart();

      console.log(this.finalShowArrayOne);
   
    this.dropdownList = [
      // { item_id: 1, item_text: 'Mumbai' },
      // { item_id: 2, item_text: 'Bangaluru' },
    ];
    this.dropdownList2 = [
      // { item_id: 1, item_text: 'Mumbai' },
      // { item_id: 2, item_text: 'Bangaluru' },
    ];

    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.selectedItems2 = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'programID',
      textField: 'programName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'projectID',
      textField: 'projectName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.getDataOfApi()

  }

  getDataOfApi(){
    // first api for program 

    this.serv
      .getRoleData()
      .pipe(pluck('programs'))
      .subscribe((res) => {
        // console.log(res);
        this.myCreatedWholeArray = res;
        console.log(this.myCreatedWholeArray);

        for (let i = 0; i < this.myCreatedWholeArray.length; i++) {
          this.dataToShowArray.push({
            programName: this.myCreatedWholeArray[i].programName,
            programID: this.myCreatedWholeArray[i].programID,
          });
        }
        console.log(this.dataToShowArray);
        this.dropdownList = this.dataToShowArray;
      });


      // second api for project 
      this.serv
      .getProjectData()
      .pipe(pluck('activeProjectList', 'table'))
      .subscribe((res) => {
   
        this.mainSeconArrayWithAllData=res;
    })

  }

  // chart ts

  renderChart() {
    new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['adidas', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // dgfdg
  onItemSelect(item: any) {
    // here we are doing nothing but the data is being pushed to an array it self

    console.log(this.selectedItems);

    
    
    if (this.dropdownList2 && this.dropdownList2.length > 0) {
      // debugger;
      
      let checkArray:any[]=[]
      
      checkArray= this.mainSeconArrayWithAllData.filter((x)=>x.programId=== item.programID)
      
      if(checkArray.length==0){

        this.dropdownList2 = this.dropdownList2.concat(
          this.mainSeconArrayWithAllData.filter((x) => x.programId === item.programID)
          );
          checkArray=[];
        }
      }
      else {
        this.dropdownList2 = this.mainSeconArrayWithAllData.filter(
          (x) => x.programId === item.programID
          );
        }
        
        
      }
      onItemSelect2(item: any) {
        
        console.log(this.selectedItems);
        
      }
      onSelectAll(items: any) {
        console.log(items);
      }
      onSelectAll2(items: any) {
        console.log(items);
      }
      showShowingArray(data:any){
        console.log(data);
      }
      showShowingArray2(data:any){
        console.log(data);
      }
      
      // second time  ..........
      
      
      // making chart from here on 
      
      makeChart(){
        console.log('dafsf',this.dropdownList2)
        let myObj:chartSendData 

        
      } 
      
      
      
      
      constructor(private serv: MyServService) {}
      
      
      // try code 
      // myShowArray=['test-1','CartoonNetwork','nick','disneyland'];
      // loginForm = new FormGroup({
      //   name:new FormControl(''),
      //   sirName:new FormControl(''),
      //   mySelectedValue: new FormControl(''),
      // })
      
      // submitForm(data:any){
      //   console.log(data);
        
      // }
      // mySelectedValue=''
      
      
}
