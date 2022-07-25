package com.example.courseologybackend;

import org.springframework.beans.CachedIntrospectionResults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.transaction.Transactional;

@RestController
@CrossOrigin
public class CourseologyController {

    @Autowired
    CourseologyRepository courseologyRepository;

    @Autowired
    CourseologyService courseologyService;

    @ExceptionHandler
    public ResponseEntity<String> handle(Exception exception){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @PostMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course){
        courseologyRepository.save(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created with id :" + course.getId());
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourse(){
        List<Course> course = courseologyRepository.findAll();
        return ResponseEntity.status(HttpStatus.FOUND).body(course);
    }
    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getGreetingById(@PathVariable String id){
        Course course = courseologyService.findCourseById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(course);
    }

    @GetMapping("/random")
    public ResponseEntity<Course> getRandomCourse(){
        Course randomCourse = courseologyService.findRandomCourse();
        return ResponseEntity.status(HttpStatus.FOUND).body(randomCourse);
    }

    @PutMapping("/course/{id}")
    public ResponseEntity<String> updateCourse(@RequestBody Course course, @PathVariable String id){
        courseologyRepository.save(course);
        return ResponseEntity.status(HttpStatus.OK).body("Updated Course with ID: " + course.getId());
    }

    @DeleteMapping("/course/{id}")
    @Transactional
    public ResponseEntity<String> deleteCourseById(@PathVariable String id){
        courseologyService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Course deleted");
    }


}
