package com.example.studentresult.service;

import com.example.studentresult.dto.ResultDTO;
import com.example.studentresult.entity.Result;
import com.example.studentresult.repo.ResultRepo;
import com.example.studentresult.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ResultService {
    @Autowired
    private ResultRepo resultRepo;
    @Autowired
    private ModelMapper modelMapper;
    public String saveResult(ResultDTO resultDTO){
        if (resultRepo.existsById(resultDTO.getResID())){
            return VarList.RSP_DUPLICATED;
        }else {
            resultRepo.save(modelMapper.map(resultDTO, Result.class));
            return VarList.RSP_SUCCESS;
        }
    }

}
