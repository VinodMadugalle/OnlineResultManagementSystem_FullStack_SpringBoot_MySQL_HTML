function saveStudent(){
    let rNumber=$('#studentinput1').val();
    let ExamID=$('#studentinput2').val();
    let Year=$('#studentinput3').val();
    let Semester=$('#studentinput4').val();
    let chres="true"

    for(i = 1; i <= 9; i++) {
        let CourseCode=document.getElementById('CourseCode'+i).innerHTML;
        let CourseTitle=document.getElementById('myDIV'+i).innerHTML;
        let Result=$('#Result'+i).val();



        $.ajax({
            method:"POST",
            contentType:"application/json",
            url:"http://localhost:8080/api/v1/Result/saveResult",
            async:true,
            data:JSON.stringify({
                "resID": "",
                "year": Year,
                "semester": Semester,
                "registrationNumber": rNumber,
                "courseCode": CourseCode,
                "courseTitle": CourseTitle,
                "result": Result,
                "examID": ExamID,
            }),
            success: function (data) {
            },
            error: function (xhr, exception) {
                chres="false"
            }

        })
        if(i === 6)
        {
            if(chres === "false"){
                alert("error")
            }else
            {
                alert("Saved")
            }
        }


    }


}

function myFunctionClick() {
    let stYear=$('#studentinput3').val();
    let semester=$('#studentinput4').val();

    var x1 = document.getElementById("myDIV1");
    var x2 = document.getElementById("myDIV2");
    var x3 = document.getElementById("myDIV3");
    var x4 = document.getElementById("myDIV4");
    var x5 = document.getElementById("myDIV5");
    var x6 = document.getElementById("myDIV6");
    var x7 = document.getElementById("myDIV7");
    var x8 = document.getElementById("myDIV8");

    var Sc1 = document.getElementById("CourseCode1");
    var Sc2 = document.getElementById("CourseCode2");
    var Sc3 = document.getElementById("CourseCode3");
    var Sc4 = document.getElementById("CourseCode4");
    var Sc5 = document.getElementById("CourseCode5");
    var Sc6 = document.getElementById("CourseCode6");
    var Sc7 = document.getElementById("CourseCode7");
    var Sc8 = document.getElementById("CourseCode8");

    var res1 = document.getElementById("Result11");
    var res2 = document.getElementById("Result12");
    var res3 = document.getElementById("Result13");
    var res4 = document.getElementById("Result14");
    var res5 = document.getElementById("Result15");
    var res6 = document.getElementById("Result16");
    var res7 = document.getElementById("Result17");
    var res8 = document.getElementById("Result18");

    var tabl = document.getElementById("table11");

    if (stYear === "1" && semester === "1") {


        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">AUX1113</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">English Language</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT1152</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Principles of Management</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT1142</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Fundamentals of Web Technologies</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT1134</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">Fundamentals of Computer Programming</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT1123</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Mathematics for Technology</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">TICT1114</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Essentials of ICT</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "1" && semester === "2") {


        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">TICT1261</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">IT Law New </div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT1223</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Operating Systems New</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT1224</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Object Oriented Programming New</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT1212</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">Discrete Structures New</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT1252</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Computational Engineering Drawing</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">TICT1243</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Electronics and Digital Circuit Designs</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";

    }
    else if(stYear === "2" && semester === "1") {


        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">AUX2113</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">English Language II </div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT2153</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Human Computer Interaction</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT2142</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Multimedia Design and Technologies</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT2134</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">Advanced Computer Programming</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT2122</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Statistics for Technology</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">TICT2113</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Data Structures and Algorithms</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "2" && semester === "2") {


        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">TICT2233</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">Database Management Systems </div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT2263</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Accounting for Technology</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT2212</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Operational Research</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT2252</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">System Analysis and Designg</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT2223</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Introduction to DBMS</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">AUX2212</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Soft skill and Career Guidance</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode7\">TICT2272</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV7\">Social and Professional Issues</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result17\">\n" +
            "                                    <select id=\"Result7\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode8\">TICT2262</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV8\">Introduction to Accounting</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result18\">\n" +
            "                                    <select id=\"Result8\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "3" && semester === "1") {


        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">AUX3112</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">Career Guidance </div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT3162</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Information Security</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT3153</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Software Engineering</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT3142</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">Social and Professional Issues in IT</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT3132</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Advanced Web Technologies</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">TICT3123</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Advanced Database Management Systems</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode7\">TICT3113</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV7\">Computer Architecture and Organization</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result17\">\n" +
            "                                    <select id=\"Result7\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "3" && semester === "2") {

        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">AUX3212</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">Research Methodology </div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT3263</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Essential of E-Commerce</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT3253</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Digital Image Processing</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT3242</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">Information Security</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT3232</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Project Management</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">TICT3224</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Advanced Computer Networks and Administration</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode7\">TICT3213</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV7\">Advanced Database Management Systems</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result17\">\n" +
            "                                    <select id=\"Result7\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                    </table>\n" +
            "                </form></div>";
    }
    else if(stYear === "4" && semester === "1") {


        tabl.innerHTML=" <div id=\"table11\">\n" +
            "               <form>\n" +
            "                    <table class=\"table center border\" >\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode\">Course Code</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Course Title\">Course Title</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"Result\">Result</div><br>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode1\">TICT4162</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV1\">Bioinformatics</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result11\">\n" +
            "                                    <select id=\"Result1\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode2\">TICT4152</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV2\">Cloud Application Development</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result12\">\n" +
            "                                    <select id=\"Result2\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode3\">TICT4143</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV3\">Intelligent Systems</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result13\">\n" +
            "                                    <select id=\"Result3\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode4\">TICT4133</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV4\">Green Computing</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result14\">\n" +
            "                                    <select id=\"Result4\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode5\">TICT4122</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV5\">Distributed Systems</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result15\">\n" +
            "                                    <select id=\"Result5\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode6\">TICT4112</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV6\">Electronics and Digital Circuit Designs</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result16\">\n" +
            "                                    <select id=\"Result6\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
            "                        </tr>\n" +
            "                        <tr>\n" +
            "                            <td>\n" +
            "                                <div id=\"CourseCode7\">TICT4133</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div id=\"myDIV7\">Mobile Application Development</div><br>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <div  class=\"border\" id=\"Result17\">\n" +
            "                                    <select id=\"Result7\">\n" +
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
            "                                </div>\n" +
            "                            </td>\n" +
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

