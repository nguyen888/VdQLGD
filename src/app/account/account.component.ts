import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';






interface Node {
  name: string;
  children?: Node[];
  id: number;
  
  
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
 
}
// dữ liệu của cây
const TREE_DATA: Node[] = [
  {
    id:0,
    name: 'Tài khoản', 
    children: [
      { id:1, name: 'Thông tin tài khoản' },
      {  id:2,name: 'Thay đổi mật khẩu'   },
      {  id:3,name: 'Đăng xuất'  },
    ]
  }, 
  {
    id:4,
    name: 'Quản lý người sử dụng'  ,
    children: [

      { id:5, name: 'Cấu hình nhóm người sử dụng'  },
      { id:6, name: 'Danh sách người sử dụng' },
      { id:7, name: 'Thêm người sử dụng' },


    ]
  },
  {
    id:8,
    name: 'Thông tin cấu hình',  
    children: [

      {  id:9,name: 'Cấu hình trường học'  },
      {  id:10,name: 'Cấu hình năm học'},
      {  id:11,name: 'Cấu hình học kỳ' },
      {  id:12,name: 'Cấu hình tiết học'   },
      {  id:13,name: 'Cấu hình khối' },
      { id:14, name: 'Khai báo tổ bộ môn'   },
      { id:15,name:'Khai báo môn học theo trường'  }


    ]
  },
  {
    id:16,
    name: 'Quản lý lớp học',  
    children: [

      { id:17, name: 'Danh sách lớp học' },
      { id:18,name: 'Danh sách học sinh theo lớp học'   },
      { id:19,name: 'Danh sách môn học theo lớp' }, 
    ]
  },
]
;



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit 
{

  private _transformer = (node: Node, level: number,) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      
      
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable,  );

  treeFlattener = new MatTreeFlattener( 
    this._transformer,   node => node.level,  node => node.expandable, node => node.children,  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private router: Router,



  ) { this.dataSource.data = TREE_DATA; }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  // public isCollapsed = false;//collapse
  avatar: any = {};
 

  ngOnInit(): void {
    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';
    
  }
  goBack() {
    this.router.navigate(['']);
  }
  onclick(){
    // if(Node.id==1){
    //   this.router.navigate(['changepassword']);
    // };
    if(Node['id'].id==1){
      this.router.navigate(['accountinfomation'])
    }
  }
}
