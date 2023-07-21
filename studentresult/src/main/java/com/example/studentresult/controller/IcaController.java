package com.example.studentresult.controller;

import com.example.studentresult.dto.IcaDTO;
import com.example.studentresult.dto.ResponseDTO;
import com.example.studentresult.entity.Ica;
import com.example.studentresult.repo.IcaRepo;
import com.example.studentresult.service.IcaService;
import com.example.studentresult.util.VarList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/Ica")
public class IcaController {
    @Autowired
    private IcaService icaService;

    @Autowired
    private ResponseDTO responseDTO;

    @Autowired
    private IcaRepo repoIca;

    @PostMapping(value = "/saveIca")
    public ResponseEntity saveIca(@RequestBody IcaDTO icaDTO){
        try {
            String res=icaService.saveIca(icaDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(icaDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);

            }else if(res.equals("06")) {
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("ICA Added");
                responseDTO.setContent(icaDTO);
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

    @GetMapping("/getReportByIca/{registrationNumber}")
    public List<Ica> getAllIcaDetails(@PathVariable String registrationNumber){
        return repoIca.findByRegistrationNumber(registrationNumber);
    }

}
