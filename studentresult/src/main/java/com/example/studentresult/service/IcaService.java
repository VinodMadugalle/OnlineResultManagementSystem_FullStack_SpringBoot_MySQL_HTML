package com.example.studentresult.service;

import com.example.studentresult.dto.IcaDTO;
import com.example.studentresult.entity.Ica;
import com.example.studentresult.repo.IcaRepo;
import com.example.studentresult.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class IcaService {
    @Autowired
    private IcaRepo icaRepo;
    @Autowired
    private ModelMapper modelMapper;
    public String saveIca(IcaDTO icaDTO){
        if (icaRepo.existsById(icaDTO.getIcaID())){
            return VarList.RSP_DUPLICATED;
        }else {
            icaRepo.save(modelMapper.map(icaDTO, Ica.class));
            return VarList.RSP_SUCCESS;
        }
    }
}
