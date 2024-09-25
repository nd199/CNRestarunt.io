package com.cnrestaurant.backend.Repo;

import com.cnrestaurant.backend.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<Contact, Long> {
}
