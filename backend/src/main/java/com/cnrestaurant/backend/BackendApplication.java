package com.cnrestaurant.backend;

import com.cnrestaurant.backend.Entity.Contact;
import com.cnrestaurant.backend.Repo.ContactRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ContactRepo contactRepo) {
        return args -> contactRepo.save(new Contact("name",
                "email", "subject", "message"
        ));
    }
}
