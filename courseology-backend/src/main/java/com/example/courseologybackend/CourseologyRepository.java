package com.example.courseologybackend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseologyRepository extends JpaRepository<Course, String> {
    Course findByid(String id);

    String deleteByid(String id);

}
