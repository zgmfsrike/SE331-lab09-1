package camt.cbsd.lab05.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = false)
@RequiredArgsConstructor
@Builder
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NonNull
    long id;
    @NonNull
    String studentId;
    @NonNull
    String name;
    @NonNull
    String surname;
    @NonNull
    double gpa;
    @NonNull
    String image;
    @NonNull
    boolean feature;
    @NonNull
    int penAmount;
    @NonNull
    String description;

    @ManyToMany
    List<Course> enrolledCourse;

    public List<Course> addCourse(Course course) {
        enrolledCourse = Optional.ofNullable(enrolledCourse).orElse(new ArrayList<>());
        enrolledCourse.add(course);
        return enrolledCourse;

    }
}
