package com.ankita.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/skills")
    public String skills() {
        return "skills";
    }

    @GetMapping("/projects")
    public String projects() {
        return "projects";
    }

    @GetMapping("/resume")
    public String resume() {
        return "resume";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }
}