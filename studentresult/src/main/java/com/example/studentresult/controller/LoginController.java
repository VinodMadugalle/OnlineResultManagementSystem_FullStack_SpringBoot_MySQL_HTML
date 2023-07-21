package com.example.studentresult.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
    @RequestMapping(value="/login",method= RequestMethod.GET)
    public String loginPage()
    {
        return "login";
    }

    @RequestMapping(value="/login",method=RequestMethod.POST)
    public String Welcomeage(ModelMap model, @RequestParam String userId, @RequestParam String password)
    {
        if(userId.equals("admin")&&password.equals("root"))
        {

            return "Welcome";
        }
        model.put("errorMsg","Please providethe correct userid and password");
        return "Login";
    }
}
