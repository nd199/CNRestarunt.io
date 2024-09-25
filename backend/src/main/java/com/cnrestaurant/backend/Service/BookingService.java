package com.cnrestaurant.backend.Service;

import com.cnrestaurant.backend.Records.BookingRequest;
import org.springframework.stereotype.Service;

public interface BookingService {
    void handleBookingForm(BookingRequest bookingRequest);
}
