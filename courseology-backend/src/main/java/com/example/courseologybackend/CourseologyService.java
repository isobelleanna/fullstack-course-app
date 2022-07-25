package com.example.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    Course findRandomCourse(){
        List<Course> courses = courseologyRepository.findAll();
        return courses.get((int)Math.random()*courses.size());
    }

    void deleteCourseById(String id){
        Course course = findCourseById(id);
        courseologyRepository.deleteByid(id);
    }

    public List<String> extractCourseIds() {
        List<Course> courses = courseologyRepository.findAll();
        return courses.stream()
                .map(Course :: getId)
                .collect(Collectors.toList());
    }
}
