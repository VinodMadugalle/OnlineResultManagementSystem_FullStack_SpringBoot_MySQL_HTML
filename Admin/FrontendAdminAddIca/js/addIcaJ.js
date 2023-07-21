function saveStudent(){
    let rNumber=$('#studentinput1').val();
    let ExamID=$('#studentinput2').val();
    let Year=$('#studentinput3').val();
    let Semester=$('#studentinput4').val();
    let Coursesubject=$('#Coursesubject').val();
    let ICAnumber=$('#ICAnumber').val();
    let Result=$('#Result').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/Ica/saveIca",
        async:true,
        data:JSON.stringify({
            "icaID": "",
            "year": Year,
            "semester": Semester,
            "registrationNumber": rNumber,
            "course": Coursesubject,
            "icaMarks": Result,
            "icaNo": ICAnumber,
            "examID": ExamID,
        }),
        success: function (data) {
            alert("Saved")
        },
        error: function (xhr, exception) {
            alert("Error")
        }

    })


}

function myFunctionClick() {
    let stYear=$('#studentinput3').val();
    let semester=$('#studentinput4').val();


    var tabl = document.getElementById("tablem");

    if (stYear === "1" && semester === "1") {


        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"AUX1113 English Language\" >AUX1113 English Language</option>\n" +
            "                                   <option value=\"TICT1152 Principles of Management\" >TICT1152 Principles of Management</option>\n" +
            "                                   <option value=\"TICT1142 Fundamentals of Web Technologies\" >TICT1142 Fundamentals of Web Technologies</option>\n" +
            "                                   <option value=\"TICT1134 Fundamentals of Computer Programming\" >TICT1134 Fundamentals of Computer Programming</option>\n" +
            "                                   <option value=\"TICT1123 Mathematics for Technology\" >TICT1123 Mathematics for Technology</option>\n" +
            "                                   <option value=\"TICT1114 Essentials of ICT\" >TICT1114 Essentials of ICT</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "1" && semester === "2") {


        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"TICT1261 IT Law New\" >TICT1261 IT Law New</option>\n" +
            "                                   <option value=\"TICT1223 Operating Systems New\" >TICT1223 Operating Systems New</option>\n" +
            "                                   <option value=\"TICT1224 Object Oriented Programming New\" >TICT1224 Object Oriented Programming New</option>\n" +
            "                                   <option value=\"TICT1212 Discrete Structures New\" >TICT1212 Discrete Structures New</option>\n" +
            "                                   <option value=\"TICT1252 Computational Engineering Drawing\" >TICT1252 Computational Engineering Drawing</option>\n" +
            "                                   <option value=\"TICT1243 Electronics and Digital Circuit Designs\" >TICT1243 Electronics and Digital Circuit Designs</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";

    }
    else if(stYear === "2" && semester === "1") {


        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"AUX2113 English Language II\" >AUX2113 English Language II</option>\n" +
            "                                   <option value=\"TICT2153 Human Computer Interaction\" >TICT2153 Human Computer Interaction</option>\n" +
            "                                   <option value=\"TICT2142 Multimedia Design and Technologies\" >TICT2142 Multimedia Design and Technologies</option>\n" +
            "                                   <option value=\"TICT2134 Advanced Computer Programming\" >TICT2134 Advanced Computer Programming</option>\n" +
            "                                   <option value=\"TICT2122 Statistics for Technology\" >TICT2122 Statistics for Technology</option>\n" +
            "                                   <option value=\"TICT2113 Data Structures and Algorithms\" >TICT2113 Data Structures and Algorithms</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "2" && semester === "2") {


        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"TICT2233 Database Management Systems\" >TICT2233 Database Management Systems</option>\n" +
            "                                   <option value=\"TICT2263 Accounting for Technology\" >TICT2263 Accounting for Technology</option>\n" +
            "                                   <option value=\"TICT2212 Operational Research\" >TICT2212 Operational Research</option>\n" +
            "                                   <option value=\"TICT2252 System Analysis and Designg\" >TICT2252 System Analysis and Designg</option>\n" +
            "                                   <option value=\"TICT2223 Introduction to DBMS\" >TICT2223 Introduction to DBMS</option>\n" +
            "                                   <option value=\"AUX2212 Soft skill and Career Guidance\" >AUX2212 Soft skill and Career Guidance</option>\n" +
            "                                   <option value=\"TICT2272 Social and Professional Issues\" >TICT2272 Social and Professional Issues</option>\n" +
            "                                   <option value=\"TICT2262 Introduction to Accounting\" >TICT2262 Introduction to Accounting</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "3" && semester === "1") {


        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"AUX3112 Career Guidance\" >AUX3112 Career Guidance</option>\n" +
            "                                   <option value=\"TICT3162 Information Security\" >TICT3162 Information Security</option>\n" +
            "                                   <option value=\"TICT3153 Software Engineering\" >TICT3153 Software Engineering</option>\n" +
            "                                   <option value=\"TICT3142 Social and Professional Issues in IT\" >TICT3142 Social and Professional Issues in IT</option>\n" +
            "                                   <option value=\"TICT3132 Advanced Web Technologies\" >TICT3132 Advanced Web Technologies</option>\n" +
            "                                   <option value=\"TICT3123 Advanced Database Management Systems\" >TICT3123 Advanced Database Management Systems</option>\n" +
            "                                   <option value=\"TICT3113 Computer Architecture and Organization\" >TICT3113 Computer Architecture and Organization</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "3" && semester === "2") {

        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"AUX3212 Research Methodology\" >AUX3212 Research Methodology</option>\n" +
            "                                   <option value=\"TICT3263 Essential of E-Commerce\" >TICT3263 Essential of E-Commerce</option>\n" +
            "                                   <option value=\"TICT3253 Digital Image Processing\" >TICT3253 Digital Image Processing</option>\n" +
            "                                   <option value=\"TICT3242 Information Security\" >TICT3242 Information Security</option>\n" +
            "                                   <option value=\"TICT3232 Project Management\" >TICT3232 Project Management</option>\n" +
            "                                   <option value=\"TICT3224 Advanced Computer Networks and Administration\" >TICT3224 Advanced Computer Networks and Administration</option>\n" +
            "                                   <option value=\"TICT3213 Advanced Database Management Systems\" >TICT3213 Advanced Database Management Systems</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "4" && semester === "1") {


        tabl.innerHTML=" <div id=\"tablem\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Course</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div>ICA</div><br>\n" +
            "                            </td> \n" +
            "                            <td>\n" +
            "                                <div>Result</div><br>\n" +
            "                            </td> \n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                             <div  class=\"border\" id=\"Result11\">\n" +
            "                            <td>\n" +
            "                               <select id=\"Coursesubject\" class=\"border\">\n" +
            "                                   <option value=\"TICT4162 Bioinformatics\" >TICT4162 Bioinformatics</option>\n" +
            "                                   <option value=\"TICT4152 Cloud Application Development\" >TICT4152 Cloud Application Development</option>\n" +
            "                                   <option value=\"TICT4143 Intelligent Systems\" >TICT4143 Intelligent Systems</option>\n" +
            "                                   <option value=\"TICT4133 Green Computing\" >TICT4133 Green Computing</option>\n" +
            "                                   <option value=\"TICT4122 Distributed Systems\" >TICT4122 Distributed Systems</option>\n" +
            "                                   <option value=\"TICT4112 Electronics and Digital Circuit Designs\" >TICT4112 Electronics and Digital Circuit Designs</option>\n" +
            "                                   <option value=\"TICT4133 Mobile Application Development\" >TICT4133 Mobile Application Development</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <select id=\"ICAnumber\" class=\"border\">\n" +
            "                                   <option value=\"ICA 01\" >ICA 01</option>\n" +
            "                                   <option value=\"ICA 02\" >ICA 02</option>\n" +
            "                                   <option value=\"ICA 03\" >ICA 03</option>\n" +
            "                                   <option value=\"ICA 04\" >ICA 04</option>\n" +
            "                               </select>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                    <select id=\"Result\" class=\"border\">\n" +
            "                                        <option value=\"A+\" >A+</option>\n" +
            "                                        <option value=\"A\" >A</option>\n" +
            "                                        <option value=\"A-\" >A-</option>\n" +
            "                                        <option value=\"B+\" >B+</option>\n" +
            "                                        <option value=\"B\" >B</option>\n" +
            "                                        <option value=\"B-\" >B-</option>\n" +
            "                                        <option value=\"C+\" >C+</option>\n" +
            "                                        <option value=\"C\" >C</option>\n" +
            "                                        <option value=\"C-\" >C-</option>\n" +
            "                                        <option value=\"D+\" >D+</option>\n" +
            "                                        <option value=\"D\" >D</option>\n" +
            "                                        <option value=\"D-\" >D-</option>\n" +
            "                                        <option value=\"E\" >E</option>\n" +
            "                                    </select>\n" +
            "                            </td>\n" +
            "                           </div>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else {
        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div>Not a subject in 4th year 2nd Semester</div><br>\n" +
            "                            </td>\n" +
            "                         </tr>\n" +
            "                     </table>\n" +
            "               </form></div>";

    }
}

