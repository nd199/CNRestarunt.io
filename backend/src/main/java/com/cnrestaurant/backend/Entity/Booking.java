package com.cnrestaurant.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "booking")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "name", nullable = false, columnDefinition = "text")
    private String name;
    @Column(name = "phone", nullable = false, columnDefinition = "integer")
    private String phone;
    @Column(name = "date", nullable = false)
    private LocalDateTime date;
    @Column(name = "time", nullable = false)
    private LocalDateTime time;
    @Column(name = "person_count", nullable = false, columnDefinition = "integer")
    private int personCount;

    public Booking(String name, String phone, LocalDateTime date, LocalDateTime time, int personCount) {
        this.name = name;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.personCount = personCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return personCount == booking.personCount && Objects.equals(id, booking.id) && Objects.equals(name, booking.name) && Objects.equals(phone, booking.phone) && Objects.equals(date, booking.date) && Objects.equals(time, booking.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, phone, date, time, personCount);
    }
}
