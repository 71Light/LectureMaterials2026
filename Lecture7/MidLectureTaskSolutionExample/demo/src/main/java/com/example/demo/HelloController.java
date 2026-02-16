package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hello")
public class HelloController {

    private int counter = 0;

    @GetMapping("/{name}")
    public String greet(@PathVariable String name) {
        counter++;
        return "hello " + name + "! Counter is:" +counter;
    }

    @GetMapping("/reset")
    public String reset() {
        counter = 0;
        return "Counter reset to 0";
    }

    @GetMapping("/caps/{name}")
    public String hello(@PathVariable String name, @RequestParam() boolean caps) {
        String reply = "hello " + name;
        if (caps) {
            return reply.toUpperCase();
        }

        return reply;
    }

    @GetMapping("/prog/{name}")
    private String ProgressiveGreeting(@PathVariable String name) {
        counter++;
        String base = "Hello " + name;

        String reply;
        if (counter == 1) {
            reply = base;
        } else if (counter == 2) {
            reply = base + "!";
        } else if (counter == 3) {
            reply = base.toUpperCase() + "!!";
        } else {
            reply = base.toUpperCase() + "!".repeat(counter);
        }

        return reply;
    }
}
