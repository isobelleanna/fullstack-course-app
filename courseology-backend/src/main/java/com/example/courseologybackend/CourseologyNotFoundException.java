package com.example.courseologybackend;

import javax.persistence.EntityNotFoundException;

public class CourseologyNotFoundException extends EntityNotFoundException {
    public CourseologyNotFoundException() {
        super("Course has not been found");
    }
}
