function saveStudent(){
    let rNumber=$('#studentinput1').val();
    let iNumber=$('#studentinput2').val();
    let fullName=$('#studentinput3').val();
    let nameWithI=$('#studentinput4').val();
    let NIC=$('#studentinput5').val();
    let Gender=$('#studentinput6').val();
    let Password=$('#studentinput7').val();
    let course=$('#studentinput8').val();
    let degree=$('#studentinput9').val();

    if(rNumber !== "" && iNumber !== "" && fullName !== "" && nameWithI !== "" && NIC !== "" && Password !== "" && Gender !== "" && course !== "" && degree !== "" )
    {
        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/api/v1/student/saveStudent",
            async:true,
            data:JSON.stringify({
                "password": Password,
                "fullName": fullName,
                "nameWithInitials": nameWithI,
                "registrationNumber": rNumber,
                "gender": Gender,
                "nic": NIC,
                "degree": degree,
                "indexNumber": iNumber,
                "course": course
            }),
            success: function (data) {
                alert("saved")
            },
            error: function (xhr, exception) {
                alert("Error")
            }
        })
    }else{

        alert("Fill All details");
        return;

    }




}
function updateStudent(){
    let rNumber=$('#studentinput1').val();
    let iNumber=$('#studentinput2').val();
    let fullName=$('#studentinput3').val();
    let nameWithI=$('#studentinput4').val();
    let NIC=$('#studentinput5').val();
    let Gender=$('#studentinput6').val();
    let Password=$('#studentinput7').val();
    let course=$('#studentinput8').val();
    let degree=$('#studentinput9').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/student/updateStudent",
        async:true,
        data:JSON.stringify({
            "password": Password,
            "fullName": fullName,
            "nameWithInitials": nameWithI,
            "registrationNumber": rNumber,
            "gender": Gender,
            "nic": NIC,
            "degree": degree,
            "indexNumber": iNumber,
            "course": course
        }),
        success: function (data) {
            alert("Updated")
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
function deleteStudent(){
    let RegistrationNumber=$('#studentinput1').val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/student/deleteStudent/"+RegistrationNumber,
        async:true,
        success: function (data) {
            alert("Deleted")
        },
        error: function (xhr, exception) {
            alert("Error")
        }
    })

}
