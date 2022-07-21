package com.example.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseologyService {

    @Autowired
    CourseologyRepository courseologyRepository;

    Course findCourseById(String id){
        Course course = courseologyRepository.findByid(id);
        if(course == null){
            throw new CourseologyNotFoundException();
        }
        return course;
    }



}
