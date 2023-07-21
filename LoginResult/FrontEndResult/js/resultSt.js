getAllStudent()
getAllResult()
let studentID = localStorage.getItem('student-ID');

function getAllStudent(){
    let studentID = localStorage.getItem('student-ID');
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/student/getReportByRef/"+studentID,
        async:true,
        success: function (data) {
            console.log(data)
            $('#empTable').empty();
            for (let emp of data){
                let password=emp.password
                let fullName=emp.fullName
                let indexNumber=emp.indexNumber
                let gender=emp.gender
                let degree=emp.degree
                let nic=emp.nic
                let course=emp.course
                let registrationNumber=emp.registrationNumber
                let nameWithInitials=emp.nameWithInitials

                var row=`<tr><td>registrationNumber</td><td>:${registrationNumber}</td></tr><tr><td>indexNumber</td><td>:${indexNumber}</td></tr><tr><td>nameWithInitials</td><td>:  ${nameWithInitials}</td></tr><tr><td>fullName</td><td>:  ${fullName}</td></tr><tr><td>nic</td><td>:  ${nic}</td></tr><tr><td>gender</td><td>:  ${gender}</td></tr><tr><td>password</td><td>:  ${password}</td></tr><tr><td>degree</td><td>:  ${degree}</td></tr><tr><td>course</td><td>:  ${course}</td></tr>`;
                document.getElementById('empTable').innerHTML = row
            }

        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}
function getAllResult(){
    let studentID = localStorage.getItem('student-ID');
    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/Result/getReportByRes/"+studentID,
        async:true,
        success: function (data) {
            $('#empTable1').empty();
            for (let emp of data){
                let courseCode=emp.courseCode
                let courseTitle=emp.courseTitle
                let result=emp.result
                let year=emp.year
                let semester=emp.semester
                if(year==1 && semester==1)
                {
                    var row2=`<tr><td>${year}st  Year  ${semester}st  Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable110').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable111').append(row1);
                }
                else if(year==1 && semester==2)
                {
                    var row2=`<tr></tr><tr><td>${year}st  Year  ${semester}nd  Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable120').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable121').append(row1);
                }
                else if(year==2 && semester==1)
                {
                    var row2=`<tr><td>${year}nd  Year  ${semester}st  Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable210').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable211').append(row1);
                }
                else if(year==2 && semester==2)
                {
                    var row2=`<tr><td>${year}nd  Year  ${semester}nd  Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable220').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable221').append(row1);
                }
                else if(year==3 && semester==1)
                {
                    var row2=`<tr><td>${year}rd  Year  ${semester}st  Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable310').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable311').append(row1);
                }
                else if(year==3 && semester==2)
                {
                    var row2=`<tr><td>${year}rd  Year  ${semester}nd Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable320').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable321').append(row1);
                }
                else if(year==4 && semester==1)
                {
                    var row2=`<tr><td>${year}th  Year  ${semester}st Semester Exam Result</td></tr><tr><td>CourseCode</td><td>CourseTitle</td><td>Result</td></tr>`;
                    document.getElementById('empTable410').innerHTML = row2
                    var row1=`<tr><td>${courseCode}</td><td>${courseTitle}</td><td>${result}</td></tr>`;
                    $('#empTable411').append(row1);
                }

            }


        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })
}


