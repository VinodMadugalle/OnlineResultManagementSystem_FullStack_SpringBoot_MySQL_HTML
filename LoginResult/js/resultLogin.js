

addEventListener('submit', function(e){
    let studentID = $('#studentID').val();

    localStorage.setItem('student-ID',studentID);

    window.location.href="FrontEndResult/resShow.html";
})
function findLog() {
    let studentID = $('#studentID').val();
    let stPassword = $('#stPassword').val();

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/student/getReportByRef/"+studentID,
        async:true,
        success: function (data) {
            console.log(data)
            $('#empTable').empty();
            for (let emp of data){
                let password=emp.password
                let registrationNumber=emp.registrationNumber

                if(studentID === registrationNumber && stPassword === password)
                {
                    window.location.assign("Home/home.html");

                }
            }
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}


