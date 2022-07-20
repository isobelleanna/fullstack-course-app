package com.example.courseologybackend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseologyRepository extends JpaRepository<Course, String> {
}
