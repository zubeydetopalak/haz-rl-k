package com.ymgfinal.Controller;

import com.ymgfinal.Entity.Belge;
import com.ymgfinal.Repository.BelgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class BelgeController {

    @Autowired
    BelgeRepository belgeRepository;

    @GetMapping("/test")
    public String test(){
        return "Test";
    }

    @GetMapping("/get-all")
    public List<Belge> getAllBelge(){
        return belgeRepository.findAll();
    }

    @PostMapping("/add-belge")
    public Belge addBelge(@RequestBody Belge belge){
        return belgeRepository.save(belge);
    }


}
