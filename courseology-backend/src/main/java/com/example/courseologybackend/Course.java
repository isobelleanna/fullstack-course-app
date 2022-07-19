package com.example.courseologybackend;

public class Course {
    private String id;
    private String title;
    private String instructor;
    private double price;
    private String category;

    public Course(String id, String title, String instructor, double price, String category) {
        this.id = id;
        this.title = title;
        this.instructor = instructor;
        this.price = price;
        this.category = category;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getInstructor() {
        return instructor;
    }

    public double getPrice() {
        return price;
    }

    public String getCategory() {
        return category;
    }
}
