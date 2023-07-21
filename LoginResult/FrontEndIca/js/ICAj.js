getAllStudent()
getAllResult()
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
                let level=emp.level
                let fullName=emp.fullName
                let indexNumber=emp.indexNumber
                let gender=emp.gender
                let degree=emp.degree
                let nic=emp.nic
                let course=emp.course
                let registrationNumber=emp.registrationNumber
                let nameWithInitials=emp.nameWithInitials

                var row=`<tr><td>registrationNumber</td><td>:${registrationNumber}</td></tr><tr><td>indexNumber</td><td>:${indexNumber}</td></tr><tr><td>nameWithInitials</td><td>:  ${nameWithInitials}</td></tr><tr><td>fullName</td><td>:  ${fullName}</td></tr><tr><td>nic</td><td>:  ${nic}</td></tr><tr><td>gender</td><td>:  ${gender}</td></tr><tr><td>level</td><td>:  ${level}</td></tr><tr><td>degree</td><td>:  ${degree}</td></tr><tr><td>course</td><td>:  ${course}</td></tr>`;
                document.getElementById('empTable').innerHTML = row
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}

function ICAFunctionClick() {
    let studentID = localStorage.getItem('student-ID');
    let stYear = $('#studentinput3').val();
    let stsemester = $('#studentinput4').val();



    var tabl = document.getElementById("tablem");

                if (stYear === "1" && stsemester === "1") {
                    $.ajax({
                        method:"GET",
                        url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
                        async:true,
                        success: function (data) {
                            $('#tablem').empty();
                            tabl.innerHTML=" <div id=\"tablem\" >\n" +
                                "                   <table   class=\"table center border-radius\">\n" +
                                "                    <tr>\n" +
                                "                            <tbody id=\"rowICA1r1\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA1r2\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA1r3\">\n" +
                                "                            </tbody>\n" +
                                "                    </tr>\n" +
                                "                    <tr>\n" +
                                "                            <tbody id=\"rowICA2r1\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA2r2\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA2r3\">\n" +
                                "                            </tbody>\n" +
                                "                    </tr>" +
                                "                    <tr>\n" +
                                "                            <tbody id=\"rowICA3r1\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA3r2\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA3r3\">\n" +
                                "                            </tbody>\n" +
                                "                    </tr>" +
                                "                    <tr>\n" +
                                "                            <tbody id=\"rowICA4r1\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA4r2\">\n" +
                                "                            </tbody>\n" +
                                "                            <tbody id=\"rowICA4r3\">\n" +
                                "                            </tbody>\n" +
                                "                    </tr>\n" +
                                "                   </table>\n" +
                                "</div>";

                            for (let emp of data) {
                                let icaNo = emp.icaNo
                                let course = emp.course
                                let result = emp.icaMarks
                                let year = emp.year
                                let semester = emp.semester
                                if(year==="1" && semester==="1")
                                {

                                    if(icaNo==="ICA 01")
                                    {
                                        var row=`<tr><td>1st year 1st Semester ICA 01</td></tr>`;
                                        document.getElementById('rowICA1r1').innerHTML = row
                                        var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                                        document.getElementById('rowICA1r2').innerHTML = row1
                                        var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                                        $('#rowICA1r3').append(row2);
                                    }
                                    else if(icaNo==="ICA 02")
                                    {
                                        var row=`<tr><td>1st year 1st Semester ICA 02</td></tr>`;
                                        document.getElementById('rowICA2r1').innerHTML = row
                                        var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                                        document.getElementById('rowICA2r2').innerHTML = row1
                                        var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                                        $('#rowICA2r3').append(row2);

                                    }
                                    else if(icaNo==="ICA 03")
                                    {
                                        var row=`<tr><td>1st year 1st Semester ICA 03</td></tr>`;
                                        document.getElementById('rowICA3r1').innerHTML = row
                                        var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                                        document.getElementById('rowICA3r2').innerHTML = row1
                                        var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                                        $('#rowICA3r3').append(row2);

                                    }
                                    else if(icaNo==="ICA 04")
                                    {
                                        var row=`<tr><td>1st year 1st Semester ICA 04</td></tr>`;
                                        document.getElementById('rowICA4r1').innerHTML = row
                                        var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                                        document.getElementById('rowICA4r2').innerHTML = row1
                                        var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                                        $('#rowICA4r3').append(row2);

                                    }

                                }




                            }

                        },
                        error: function (xhr, exception) {
                            alert("Error")
                        }
                    })



                }

    if (stYear === "1" && stsemester === "2") {
        $.ajax({
            method:"GET",
            url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
            async:true,
            success: function (data) {
                $('#tablem').empty();
                tabl.innerHTML=" <div id=\"tablem\">\n" +
                    "                   <table   class=\"table center border-radius\">\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA1r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA2r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA3r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA4r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                   </table>\n" +
                    "</div>";

                for (let emp of data) {
                    let icaNo = emp.icaNo
                    let course = emp.course
                    let result = emp.icaMarks
                    let year = emp.year
                    let semester = emp.semester
                    if(year==="1" && semester==="2")
                    {

                        if(icaNo==="ICA 01")
                        {
                            var row=`<tr><td>1st year 2nd Semester ICA 01</td></tr>`;
                            document.getElementById('rowICA1r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA1r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA1r3').append(row2);
                        }
                        else if(icaNo==="ICA 02")
                        {
                            var row=`<tr><td>1st year 2d Semester ICA 02</td></tr>`;
                            document.getElementById('rowICA2r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA2r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA2r3').append(row2);

                        }
                        else if(icaNo==="ICA 03")
                        {
                            var row=`<tr><td>1st year 2nd Semester ICA 03</td></tr>`;
                            document.getElementById('rowICA3r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA3r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA3r3').append(row2);

                        }
                        else if(icaNo==="ICA 04")
                        {
                            var row=`<tr><td>1st year 2nd Semester ICA 04</td></tr>`;
                            document.getElementById('rowICA4r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA4r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA4r3').append(row2);

                        }

                    }




                }

            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })



    }
    if (stYear === "2" && stsemester === "1") {
        $.ajax({
            method:"GET",
            url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
            async:true,
            success: function (data) {
                $('#tablem').empty();
                tabl.innerHTML=" <div id=\"tablem\">\n" +
                    "                   <table   class=\"table center border-radius\">\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA1r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA2r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA3r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA4r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                   </table>\n" +
                    "</div>";

                for (let emp of data) {
                    let icaNo = emp.icaNo
                    let course = emp.course
                    let result = emp.icaMarks
                    let year = emp.year
                    let semester = emp.semester
                    if(year==="2" && semester==="1")
                    {

                        if(icaNo==="ICA 01")
                        {
                            var row=`<tr><td>2nd year 1st Semester ICA 01</td></tr>`;
                            document.getElementById('rowICA1r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA1r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA1r3').append(row2);
                        }
                        else if(icaNo==="ICA 02")
                        {
                            var row=`<tr><td>2nd year 1st Semester ICA 02</td></tr>`;
                            document.getElementById('rowICA2r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA2r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA2r3').append(row2);

                        }
                        else if(icaNo==="ICA 03")
                        {
                            var row=`<tr><td>2nd year 1st Semester ICA 03</td></tr>`;
                            document.getElementById('rowICA3r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA3r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA3r3').append(row2);

                        }
                        else if(icaNo==="ICA 04")
                        {
                            var row=`<tr><td>2nd year 1st Semester ICA 04</td></tr>`;
                            document.getElementById('rowICA4r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA4r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA4r3').append(row2);

                        }
                    }
                }
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }
    if (stYear === "2" && stsemester === "2") {
        $.ajax({
            method:"GET",
            url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
            async:true,
            success: function (data) {
                $('#tablem').empty();
                tabl.innerHTML=" <div id=\"tablem\">\n" +
                    "                   <table   class=\"table center border-radius\">\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA1r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA2r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA3r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA4r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                   </table>\n" +
                    "</div>";

                for (let emp of data) {
                    let icaNo = emp.icaNo
                    let course = emp.course
                    let result = emp.icaMarks
                    let year = emp.year
                    let semester = emp.semester
                    if(year==="2" && semester==="2")
                    {

                        if(icaNo==="ICA 01")
                        {
                            var row=`<tr><td>2nd year 2nd Semester ICA 01</td></tr>`;
                            document.getElementById('rowICA1r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA1r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA1r3').append(row2);
                        }
                        else if(icaNo==="ICA 02")
                        {
                            var row=`<tr><td>2nd year 2nd Semester ICA 02</td></tr>`;
                            document.getElementById('rowICA2r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA2r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA2r3').append(row2);

                        }
                        else if(icaNo==="ICA 03")
                        {
                            var row=`<tr><td>2nd year 2nd Semester ICA 03</td></tr>`;
                            document.getElementById('rowICA3r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA3r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA3r3').append(row2);

                        }
                        else if(icaNo==="ICA 04")
                        {
                            var row=`<tr><td>2nd year 2nd Semester ICA 04</td></tr>`;
                            document.getElementById('rowICA4r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA4r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA4r3').append(row2);

                        }
                    }
                }
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }
    if (stYear === "3" && stsemester === "1") {
        $.ajax({
            method:"GET",
            url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
            async:true,
            success: function (data) {
                $('#tablem').empty();
                tabl.innerHTML=" <div id=\"tablem\">\n" +
                    "                   <table   class=\"table center border-radius\">\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA1r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA2r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA3r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA4r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                   </table>\n" +
                    "</div>";

                for (let emp of data) {
                    let icaNo = emp.icaNo
                    let course = emp.course
                    let result = emp.icaMarks
                    let year = emp.year
                    let semester = emp.semester
                    if(year==="3" && semester==="1")
                    {

                        if(icaNo==="ICA 01")
                        {
                            var row=`<tr><td>3rd year 1st Semester ICA 01</td></tr>`;
                            document.getElementById('rowICA1r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA1r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA1r3').append(row2);
                        }
                        else if(icaNo==="ICA 02")
                        {
                            var row=`<tr><td>3rd year 1st Semester ICA 02</td></tr>`;
                            document.getElementById('rowICA2r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA2r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA2r3').append(row2);

                        }
                        else if(icaNo==="ICA 03")
                        {
                            var row=`<tr><td>3rd year 1st Semester ICA 03</td></tr>`;
                            document.getElementById('rowICA3r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA3r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA3r3').append(row2);

                        }
                        else if(icaNo==="ICA 04")
                        {
                            var row=`<tr><td>3rd year 1st Semester ICA 04</td></tr>`;
                            document.getElementById('rowICA4r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA4r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA4r3').append(row2);

                        }
                    }
                }
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }
    if (stYear === "3" && stsemester === "2") {
        $.ajax({
            method:"GET",
            url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
            async:true,
            success: function (data) {
                $('#tablem').empty();
                tabl.innerHTML=" <div id=\"tablem\">\n" +
                    "                   <table  class=\"table center border-radius\">\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA1r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA2r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA3r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA4r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                   </table>\n" +
                    "</div>";

                for (let emp of data) {
                    let icaNo = emp.icaNo
                    let course = emp.course
                    let result = emp.icaMarks
                    let year = emp.year
                    let semester = emp.semester
                    if(year==="3" && semester==="2")
                    {

                        if(icaNo==="ICA 01")
                        {
                            var row=`<tr><td>3rd year 2nd Semester ICA 01</td></tr>`;
                            document.getElementById('rowICA1r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA1r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA1r3').append(row2);
                        }
                        else if(icaNo==="ICA 02")
                        {
                            var row=`<tr><td>3rd year 2nd Semester ICA 02</td></tr>`;
                            document.getElementById('rowICA2r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA2r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA2r3').append(row2);

                        }
                        else if(icaNo==="ICA 03")
                        {
                            var row=`<tr><td>3rd year 2nd Semester ICA 03</td></tr>`;
                            document.getElementById('rowICA3r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA3r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA3r3').append(row2);

                        }
                        else if(icaNo==="ICA 04")
                        {
                            var row=`<tr><td>3rd year 2nd Semester ICA 04</td></tr>`;
                            document.getElementById('rowICA4r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA4r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA4r3').append(row2);

                        }
                    }
                }
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }
    if (stYear === "4" && stsemester === "1") {
        $.ajax({
            method:"GET",
            url:"http://localhost:8080/api/v1/Ica/getReportByIca/"+studentID,
            async:true,
            success: function (data) {
                $('#tablem').empty();
                tabl.innerHTML=" <div id=\"tablem\">\n" +
                    "                   <table  class=\"table center border-radius\">\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA1r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA1r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA2r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA2r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA3r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA3r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>" +
                    "                    <tr>\n" +
                    "                            <tbody id=\"rowICA4r1\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r2\">\n" +
                    "                            </tbody>\n" +
                    "                            <tbody id=\"rowICA4r3\">\n" +
                    "                            </tbody>\n" +
                    "                    </tr>\n" +
                    "                   </table>\n" +
                    "</div>";

                for (let emp of data) {
                    let icaNo = emp.icaNo
                    let course = emp.course
                    let result = emp.icaMarks
                    let year = emp.year
                    let semester = emp.semester

                    if(year==="4" && semester==="1")
                    {

                        if(icaNo==="ICA 01")
                        {
                            var row=`<tr><td>4th year 1st Semester ICA 01</td></tr>`;
                            document.getElementById('rowICA1r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA1r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA1r3').append(row2);
                        }
                        else if(icaNo==="ICA 02")
                        {
                            var row=`<tr><td>4th year 1st Semester ICA 02</td></tr>`;
                            document.getElementById('rowICA2r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA2r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA2r3').append(row2);

                        }
                        else if(icaNo==="ICA 03")
                        {
                            var row=`<tr><td>4th year 1st Semester ICA 03</td></tr>`;
                            document.getElementById('rowICA3r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA3r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA3r3').append(row2);

                        }
                        else if(icaNo==="ICA 04")
                        {
                            var row=`<tr><td>4th year 1st Semester ICA 04</td></tr>`;
                            document.getElementById('rowICA4r1').innerHTML = row
                            var row1=`<tr><td>Subject Name</td><td>Result</td></tr>`;
                            document.getElementById('rowICA4r2').innerHTML = row1
                            var row2=`<tr><td>${course}</td><td>${result}</td></tr>`;
                            $('#rowICA4r3').append(row2);

                        }
                    }
                }
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }

    if (stYear === "4" && stsemester === "2") {
        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "                   <table  class=\"border-radius\">\n" +
            "                    <tr>\n" +
            "                            No subject\n" +
            "                    </tr>\n" +
            "                   </table>\n" +
            "</div>";
    }




}

