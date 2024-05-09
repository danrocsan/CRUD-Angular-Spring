package com.rocha.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RequestMapping("/api/hello")
@RestController

public class HelloController {

    @GetMapping
    public String hello() {
        return "Hello!";
    }
    
    
}
