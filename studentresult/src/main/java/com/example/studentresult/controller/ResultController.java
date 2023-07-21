package com.example.studentresult.controller;


import com.example.studentresult.dto.ResponseDTO;
import com.example.studentresult.dto.ResultDTO;
import com.example.studentresult.entity.Result;
import com.example.studentresult.repo.ResultRepo;
import com.example.studentresult.service.ResultService;
import com.example.studentresult.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/Result")
public class ResultController {
    @Autowired
    private ResultService resultService;

    @Autowired
    private ResponseDTO responseDTO;

    @Autowired
    private ResultRepo repoRes;

    @PostMapping(value = "/saveResult")
    public ResponseEntity saveResult(@RequestBody ResultDTO resultDTO){
        try {
            String res=resultService.saveResult(resultDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(resultDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("06")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("result Added");
                responseDTO.setContent(resultDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }

        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @GetMapping("/getReportByRes/{registrationNumber}")
    public List<Result> getAllResultDetails(@PathVariable String registrationNumber){
        return repoRes.findByRegistrationNumber(registrationNumber);
    }


}
