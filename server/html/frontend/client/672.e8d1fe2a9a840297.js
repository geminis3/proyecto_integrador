"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[672],{7672:(k,_,s)=>{s.r(_),s.d(_,{FacultiesPageModule:()=>E});var u=s(9808),t=s(1223),p=s(7562),f=s(2290),h=s(5748),r=s(520),m=s(2340);let U=(()=>{class n{constructor(e){this.http=e,this.options={},this.headers={}}init(){this.headers=new r.WM({api_token:sessionStorage.getItem("token")}),this.options={headers:this.headers}}get(){return this.init(),this.http.get(m.N.api+"deans",this.options).toPromise()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(r.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=s(2382),d=s(4040);function Z(n,c){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.name)}}function y(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"input",7),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().$implicit.name=a}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngModel",e.name)}}function T(n,c){if(1&n&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}function b(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"select",25),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().$implicit.dean_id=a}),t._uU(1,"\n                            "),t.YNc(2,T,2,2,"option",9),t._uU(3,"\n                        "),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("ngModel",e.dean_id)("disabled",!0),t.xp6(2),t.Q6J("ngForOf",i.deans)}}function F(n,c){if(1&n&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}function x(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"select",8),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().$implicit.dean_id=a}),t._uU(1,"\n                            "),t.YNc(2,F,2,2,"option",9),t.ALo(3,"orderBy"),t._uU(4,"\n                        "),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw();t.Q6J("ngModel",e.dean_id),t.xp6(2),t.Q6J("ngForOf",t.xi3(3,2,i.deans,i.order))}}function C(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).edit_faculty()}),t._uU(1,"\n                                "),t._UZ(2,"i",28),t._uU(3,"\n                            "),t.qZA()}}function A(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().update_faculty(a)}),t._uU(1,"\n                                "),t._UZ(2,"i",29),t._uU(3,"\n                            "),t.qZA()}}function M(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).edit_faculty()}),t._uU(1,"\n                                "),t._UZ(2,"i",31),t._uU(3,"\n                            "),t.qZA()}}function J(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().delete_faculty(a)}),t._uU(1,"\n                                "),t._UZ(2,"i",33),t._uU(3,"\n                            "),t.qZA()}}function v(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr",15),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().select_faculty(o)}),t._uU(1,"\n                    "),t.TgZ(2,"th",16),t._uU(3),t.qZA(),t._uU(4,"\n                    "),t.TgZ(5,"td"),t._uU(6,"\n                        "),t.YNc(7,Z,2,1,"span",17),t._uU(8,"\n                        "),t.YNc(9,y,1,1,"input",18),t._uU(10,"\n                    "),t.qZA(),t._uU(11,"\n                    "),t.TgZ(12,"td"),t._uU(13,"\n                        "),t.YNc(14,b,4,3,"select",19),t._uU(15,"\n                        "),t.YNc(16,x,5,5,"select",20),t._uU(17,"\n                    "),t.qZA(),t._uU(18,"\n                    "),t.TgZ(19,"td"),t._uU(20,"\n                        "),t.TgZ(21,"div",10),t._uU(22,"\n                            "),t.YNc(23,C,4,0,"button",21),t._uU(24,"\n                            "),t.YNc(25,A,4,0,"button",22),t._uU(26,"\n                            "),t.YNc(27,M,4,0,"button",23),t._uU(28,"\n                            "),t.YNc(29,J,4,0,"button",24),t._uU(30,"\n                        "),t.qZA(),t._uU(31,"\n                    "),t.qZA(),t._uU(32,"\n                "),t.qZA()}if(2&n){const e=c.$implicit,i=t.oxw();t.xp6(3),t.hij("\n                        ",e.id,"\n                    "),t.xp6(4),t.Q6J("ngIf",i.selected_faculty!==e||i.selected_faculty==e&&!i.isEditing),t.xp6(2),t.Q6J("ngIf",i.selected_faculty==e&&i.isEditing),t.xp6(5),t.Q6J("ngIf",i.selected_faculty!==e||i.selected_faculty==e&&!i.isEditing),t.xp6(2),t.Q6J("ngIf",i.selected_faculty==e&&i.isEditing),t.xp6(7),t.Q6J("ngIf",!i.isEditing||i.selected_faculty!=e),t.xp6(2),t.Q6J("ngIf",i.selected_faculty==e&&i.isEditing),t.xp6(2),t.Q6J("ngIf",i.selected_faculty==e&&i.isEditing),t.xp6(2),t.Q6J("ngIf",!i.isEditing||i.selected_faculty!=e)}}function P(n,c){if(1&n&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.Q6J("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}let w=(()=>{class n{constructor(e,i,a,o){this.spinner=e,this.toastr=i,this.facultyDataService=a,this.deanDataService=o,this.faculties=[],this.new_faculty={name:"",dean:1},this.selected_faculty={},this.deans=[],this.isEditing=!1,this.order="id"}ngOnInit(){this.refresh()}refresh(){this.new_faculty.name="",this.new_faculty.dean=1,this.isEditing=!1,this.get_deans(),this.get_faculties()}select_faculty(e){this.selected_faculty=e}get_faculties(){this.spinner.show(),this.faculties=[],this.facultyDataService.get().then(e=>{this.spinner.hide(),this.faculties=e}).catch(e=>{console.log(e)})}create_faculty(){if(this.spinner.show(),""==this.new_faculty.name)return this.spinner.hide(),void this.toastr.error("El nombre no puede estar vacio.","Error");this.facultyDataService.create(this.new_faculty.name,this.new_faculty.dean).then(e=>{this.spinner.hide(),this.toastr.success("La facultad ha sido creada correctamente.","Facultad Creada"),this.refresh()}).catch(e=>{console.log(e)})}update_faculty(e){if(this.spinner.show(),""==e.name)return this.spinner.hide(),void this.toastr.error("El nombre no puede estar vacio.","Error");this.facultyDataService.update(e.id,e.name,e.dean_id).then(i=>{this.spinner.hide(),this.toastr.success("La facultad ha sido actualizada correctamente.","Facultad Actualizada"),this.refresh()}).catch(i=>{console.log(i)})}delete_faculty(e){this.spinner.show(),this.facultyDataService.delete(e.id).then(i=>{this.spinner.hide(),this.toastr.success("La facultad ha sido eliminada correctamente.","Facultad Eliminada"),this.refresh()}).catch(i=>{console.log(i)})}edit_faculty(){this.isEditing=!this.isEditing}get_deans(){this.spinner.show(),this.deans=[],this.deanDataService.get().then(e=>{this.spinner.hide(),this.deans=e}).catch(e=>{console.log(e)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.t2),t.Y36(f._W),t.Y36(h.E),t.Y36(U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-faculties-page"]],decls:68,vars:10,consts:[[1,"display-5","mb-5"],[1,"row","d-flex","mb-5"],[1,"col-12","table-responsive"],[1,"table","table-hover","table-bordered"],[1,"table-light"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-success",3,"click"],[1,"fas","fa-plus"],["type","button",1,"btn","btn-primary","mb-5",3,"click"],[1,"fas","fa-redo"],[3,"click"],["scope","row"],[4,"ngIf"],["type","text","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],["class","form-select",3,"ngModel","disabled","ngModelChange",4,"ngIf"],["class","form-select",3,"ngModel","ngModelChange",4,"ngIf"],["type","button","class","btn btn-primary",3,"click",4,"ngIf"],["type","button","class","btn btn-success",3,"click",4,"ngIf"],["type","button","class","btn btn-warning",3,"click",4,"ngIf"],["type","button","class","btn btn-danger",3,"click",4,"ngIf"],[1,"form-select",3,"ngModel","disabled","ngModelChange"],[3,"ngValue"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fas","fa-edit"],[1,"fas","fa-save"],["type","button",1,"btn","btn-warning",3,"click"],[1,"fas","fa-ban"],["type","button",1,"btn","btn-danger",3,"click"],[1,"fas","fa-trash"]],template:function(e,i){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Facultades"),t.qZA(),t._uU(2,"\n"),t.TgZ(3,"div",1),t._uU(4,"\n    "),t.TgZ(5,"div",2),t._uU(6,"\n        "),t.TgZ(7,"table",3),t._uU(8,"\n            "),t.TgZ(9,"thead",4),t._uU(10,"\n                "),t.TgZ(11,"tr"),t._uU(12,"\n                    "),t.TgZ(13,"th",5),t._uU(14,"ID"),t.qZA(),t._uU(15,"\n                    "),t.TgZ(16,"th",5),t._uU(17,"Nombre"),t.qZA(),t._uU(18,"\n                    "),t.TgZ(19,"th",5),t._uU(20,"Decano"),t.qZA(),t._uU(21,"\n                    "),t.TgZ(22,"th",5),t._uU(23,"Acciones"),t.qZA(),t._uU(24,"\n                "),t.qZA(),t._uU(25,"\n            "),t.qZA(),t._uU(26,"\n            "),t.TgZ(27,"tbody"),t._uU(28,"\n                "),t.YNc(29,v,33,9,"tr",6),t.ALo(30,"orderBy"),t._uU(31,"\n                "),t.TgZ(32,"tr"),t._uU(33,"\n                    "),t._UZ(34,"td"),t._uU(35,"\n                    "),t.TgZ(36,"td"),t.TgZ(37,"input",7),t.NdJ("ngModelChange",function(o){return i.new_faculty.name=o}),t.qZA(),t.qZA(),t._uU(38,"\n                    "),t.TgZ(39,"td"),t._uU(40,"\n                        "),t.TgZ(41,"select",8),t.NdJ("ngModelChange",function(o){return i.new_faculty.dean=o}),t._uU(42,"\n                            "),t.YNc(43,P,2,2,"option",9),t.ALo(44,"orderBy"),t._uU(45,"\n                        "),t.qZA(),t._uU(46,"\n                    "),t.qZA(),t._uU(47,"\n                    "),t.TgZ(48,"td"),t._uU(49,"\n                        "),t.TgZ(50,"div",10),t._uU(51,"\n                            "),t.TgZ(52,"button",11),t.NdJ("click",function(){return i.create_faculty()}),t._uU(53,"\n                                "),t._UZ(54,"i",12),t._uU(55,"\n                            "),t.qZA(),t._uU(56,"\n                        "),t.qZA(),t._uU(57,"\n                    "),t.qZA(),t._uU(58,"\n                "),t.qZA(),t._uU(59,"\n            "),t.qZA(),t._uU(60,"\n        "),t.qZA(),t._uU(61,"\n    "),t.qZA(),t._uU(62,"\n"),t.qZA(),t._uU(63,"\n"),t.TgZ(64,"button",13),t.NdJ("click",function(){return i.refresh()}),t._uU(65,"\n    "),t._UZ(66,"i",14),t._uU(67," Refrescar\n"),t.qZA()),2&e&&(t.xp6(29),t.Q6J("ngForOf",t.xi3(30,4,i.faculties,i.order)),t.xp6(8),t.Q6J("ngModel",i.new_faculty.name),t.xp6(4),t.Q6J("ngModel",i.new_faculty.dean),t.xp6(2),t.Q6J("ngForOf",t.xi3(44,7,i.deans,i.order)))},directives:[u.sg,u.O5,l.Fj,l.JJ,l.On,l.EJ,l.YN,l.Kr],pipes:[d.T],styles:[""]}),n})();var g=s(1196);const q=[{path:"",component:w}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(q)],g.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[u.ez,N,l.u5,d.l]]}),n})()}}]);