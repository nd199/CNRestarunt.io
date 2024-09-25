package com.cnrestaurant.backend.Service;

import com.cnrestaurant.backend.Entity.Booking;
import com.cnrestaurant.backend.Exception.ResourceNotFoundException;
import com.cnrestaurant.backend.Records.BookingRequest;
import com.cnrestaurant.backend.Repo.BookingRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;


@Transactional
@Service
public class BookingImpl implements BookingService {

    private final BookingRepo bookingRepo;

    public BookingImpl(BookingRepo bookingRepo) {
        this.bookingRepo = bookingRepo;
    }


    @Override
    public void handleBookingForm(BookingRequest bookingRequest) {

        if (!checkNotNull(bookingRequest)) {
            throw new ResourceNotFoundException(
                    "Invalid booking request Please fill all fields");
        }
        Booking booking = new Booking(
                bookingRequest.name(),
                bookingRequest.phone(),
                bookingRequest.date(),
                bookingRequest.time(),
                bookingRequest.personCount()
        );

        bookingRepo.save(booking);
    }

    private static boolean checkNotNull(BookingRequest bookingRequest) {
        return bookingRequest.name() != null && bookingRequest.phone() != null
                && bookingRequest.date() != null && bookingRequest.time() != null
                && bookingRequest.personCount() >= 1;
    }


}