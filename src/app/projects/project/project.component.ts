import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private service: ProjectService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    form.resetForm();
    this.service.formData =
    {
      ID : null,
      Name : '',
      Technology : '',
      Team : '',
      Manager : ''

    }
  }
  onSubmit(form: NgForm) {
    this.insertRecord(form);

  }
  insertRecord(form: NgForm) {

    this.service.postProject(form.value).subscribe(res => {

      this.resetForm(form);
    });
  }
}
