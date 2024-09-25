package com.cnrestaurant.backend.Controller;

import com.cnrestaurant.backend.Records.BookingRequest;
import com.cnrestaurant.backend.Records.ContactRequest;
import com.cnrestaurant.backend.Service.BookingService;
import com.cnrestaurant.backend.Service.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restaurant/v1")
public class RestaurantController {

    private final BookingService bookingService;
    private final ContactService contactService;


    public RestaurantController(BookingService bookingService,
                                ContactService contactService) {
        this.bookingService = bookingService;
        this.contactService = contactService;
    }

    @PostMapping("/sendReviewOrInfo")
    public ResponseEntity<?> handleContactForm(@RequestBody ContactRequest contactRequest) {
        contactService.handleContactForm(contactRequest);
        return ResponseEntity.ok("ContactForm submitted");
    }

    @PostMapping("/bookATable")
    public ResponseEntity<?> handleBookingForm(@RequestBody BookingRequest bookingRequest) {
        bookingService.handleBookingForm(bookingRequest);
        return ResponseEntity.ok("BookingForm submitted");
    }

}
