import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  education_details = [
    {
      degree_name:"M.Sc Computer Science",
      category:"Post Graduation",
      institute:"M.I.T World Peace University - Pune",
      duration:" 2021 - 2023 ",
      score:"9.74 CGPA"
    },
    {
      degree_name:"B.Sc Computer Science",
      category:"Graduation",
      institute:"Thakur College of Science and Commerce - Kandivali",
      duration:" 2018 - 2021",
      score:"9.03 CGPA"
    },
    {
      degree_name:"Senior Secondary (XII)",
      category:"Class 12 - Science",
      institute:"Muljibhai Mehta International School - Virar",
      duration:"Completed in 2018",
      score:"Aggregate 66.8%"
    },
    {
      degree_name:"Secondary (X)",
      category:"School Level",
      institute:"Muljibhai Mehta International School - Virar",
      duration:"Completed in 2016",
      score:"9.6 CGPA"
    },
  ];

  ngOnInit(): void {
  }

}
