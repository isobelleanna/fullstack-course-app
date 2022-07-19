package com.example.courseologybackend;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CourseologyRepository {
    private final List<Course> courses = new ArrayList<>();
    {courses.add(new Course("12", "Intro to UX", "Bob Green", 15.99, "UX && UI"));};
}
