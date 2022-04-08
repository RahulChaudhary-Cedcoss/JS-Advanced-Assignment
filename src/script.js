// var EMPLOYEE = [];

//       function Myfunction() {
//         console.log("MyFunction");
//         var Emp_Id = document.getElementById("id").value;
//         console.log("this is" + Emp_Id);
//         var Emp_Name = document.getElementById("name").value;
//         var Emp_Salary = document.getElementById("salary").value;
//         console.log("This is my function" + Myfunction);
//         if (Emp_Id == "" || Emp_Name == "" || Emp_Salary == "") {
//           alert("Please fill all the feilds.");
//         }

//         var Details = {
//           Empid: `${Emp_Id}`,
//           Empname: `${Emp_Name}`,
//           Empsalary: `${Emp_Salary}`,
//         };
//         EMPLOYEE.push(Details);
//         // JSON.stringify(EMPLOYEE)
//         // console.log(myJSON)
//         EMPLOYEE.forEach((element) => {
//           element.Emp_Salary = 30000;
//         });
//         // this.display();
//         Display();
//       }

//       function Display() {
//     html_header = `<table><tr><th>ID</th><th>Name</th><th>Basic Salary</th><th>Updated Salary</th></tr>`
//     html_footer = `<tr><th></th><th></th><th></th><tr></table>`
//     var row ="";
// row += `<tr><td>${id}</td><td>${name}</td><td>${salary}</td><td></td></tr>`;

//     try {
//     EMPLOYEE.forEach((element) =>{
//         // var hello;
//         // var a = Empsalary;
//         // var b = (Empsalary*75/100);       //  This part for only calculating the 15% salary of Employee and in the place of
//         // hello = () => {                  // updated salary i want print after commenting the if statement , so please sirplease considor it also;     
//         //     return (a-b);
//         // }

//         if(element.Empsalary>0){
//         var updatedSal = element.Empsalary*1.10;
//         html_header += 
//         `<tr>
//         <td>${element.Empid}</td>
//         <td>${element.Empname}</td>
//         <td>${element.Empsalary}</td>
//         <td>${updatedSal}</td>
//         <tr/>`    
//             }
//             else {
//                 console.log("Your Salary Less than 0");
//             }
//         });
//     document.getElementById("demo").innerHTML = html_header + html_footer;
//     }
//     catch (Catcherror) {
//         alert("There is some error");
       
//     }
// };

// class Employee {
//     function (){
//         var Emp_Id = document.getElementById("id").value;
//         var Emp_Name = document.getElementById("name").value;
//         var Emp_Salary = document.getElementById("salary").value;

//        var Details = {
//         "Empid" : `${Emp_Id}`,
//         "Empname" : `${Emp_Name}`,
//         "Empsalary" : `${Emp_Salary}`,
//     };
//     EMPLOYEE.push(Details);
//     // EMPLOYEE.forEach(element => {
//     //     element.Empsalary = 30000;
//     // });
//     // this.display();
//     Display();
//     Myfunction();
// };
// };