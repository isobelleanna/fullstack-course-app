package com.example.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CourseologyController {

    @Autowired
    CourseologyRepository courseologyRepository;

    @ExceptionHandler
    public ResponseEntity<String> handle(Exception exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @PostMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course){
        courseologyRepository.save(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created with id :" + course.getId());
    }

//    @GetMapping("/courses")
//    public


}
