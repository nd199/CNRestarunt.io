package com.cnrestaurant.backend.Repo;

import com.cnrestaurant.backend.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, Long> {
}
