import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { studentData } from '../comp/studentDetails';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private json_url: string = "assets/data.json";
  name!:string
  order:boolean=false;
  pageLimits:number[]=[5,10,20,30];
  pageDivision!: number;
  pageLimit:number=50;
  start:number=0;
  studentsOriginal: studentData[] = [];
  selectedIndex:number=0;
  entries:number[]=[];

  students:studentData[]=[]
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient){}
  // ngOnInit(): void {
  //   this.name=this.activatedRoute.snapshot.params["uname"]
  //   // throw new Error('Method not implemented.');
  // }
  public getJSON(): Observable<any> {
    return this.http.get(this.json_url);
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.students = data;
      this.studentsOriginal = data;

    })
    this.students = this.studentsOriginal;
    this.pageLimitChange();
    this.name = this.activatedRoute.snapshot.params["uname"];
  }


  // sortData(formcolumn: string) {
  //   if (formcolumn == 'rollno' || formcolumn == 'marks') {
  //     if (this.order) {
  //       let newarr = this.students.sort((a, b) => a[formcolumn] - b[formcolumn]);
  //       this.students = newarr;
  //     } else {
  //       let newarr = this.students.sort((a, b) => b[formcolumn] - a[formcolumn]);
  //       this.students = newarr;
  //     }
  //     this.order = !this.order;
  //   } else {
  //     if (this.order) {
  //       let newarr = this.students.sort((a, b) => String(a[formcolumn as keyof studentData]).localeCompare(String(b[formcolumn as keyof studentData])));
  //       this.students = newarr;
  //     } else {
  //       let newarr = this.students.sort((a, b) => String(b[formcolumn as keyof studentData]).localeCompare(String(a[formcolumn as keyof studentData])));
  //       this.students = newarr;
  //     }
  //     this.order = !this.order;
  //   }

  // }
  pageLimitChange() {
    if (this.students.length == 0) {
      this.pageDivision = 1;
      this.entries = [0];
    } else {
      this.pageDivision = Math.ceil(this.students.length / (this.pageLimit > this.students.length ? this.students.length : this.pageLimit));
      this.entries = Array(this.pageDivision).fill(0).map((x, i) => i);
    }
  }


  changeLimit(event: Event) {
    this.pageLimit = Number((<HTMLInputElement>event.target).value);
    this.ngOnInit();
  }

  changePage(n: number) {
    if (this.pageDivision * n <= this.studentsOriginal.length) {
      this.start = this.pageLimit * n;
    } else {
      this.start = (this.pageLimit * n);
      console.log(this.start)
    }
    this.selectedIndex = n;
  }

  previousPage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.changePage(this.selectedIndex)
    }
  }

  nextPage() {
    if (this.selectedIndex < this.students.length) {
      this.selectedIndex++;
      this.changePage(this.selectedIndex)

    }
  }


}
