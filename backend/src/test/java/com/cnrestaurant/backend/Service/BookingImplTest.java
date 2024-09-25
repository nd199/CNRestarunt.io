package com.cnrestaurant.backend.Service;

import com.cnrestaurant.backend.Entity.Booking;
import com.cnrestaurant.backend.Exception.ResourceNotFoundException;
import com.cnrestaurant.backend.Records.BookingRequest;
import com.cnrestaurant.backend.Repo.BookingRepo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

class BookingImplTest {

    @Mock
    private BookingRepo bookingRepo;

    @InjectMocks
    private BookingImpl underTest;

    private AutoCloseable autoCloseable;

    private BookingRequest bookRequest;


    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        bookRequest = new BookingRequest(
                "John",
                "1234567890",
                LocalDateTime.now().withSecond(0),
                LocalDateTime.now().withSecond(0),
                2
        );
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void handleBookingFormValidRequest() {

        underTest.handleBookingForm(bookRequest);

        verify(bookingRepo, times(1)).save(argThat(
                        booking ->
                                booking.getName().equals(bookRequest.name()) &&
                                        booking.getPhone().equals(bookRequest.phone()) &&
                                        booking.getDate().equals(bookRequest.date()) &&
                                        booking.getTime().equals(bookRequest.time()) &&
                                        booking.getPersonCount() == bookRequest.personCount()
                )
        );
    }

    @Test
    void handleBookingFormThrowsIfAnyFieldIsNull() {
        BookingRequest invalidRequest = new BookingRequest(
                null,
                bookRequest.phone(),
                bookRequest.date(),
                bookRequest.time(),
                bookRequest.personCount()
        );

        assertThatThrownBy(() ->
                underTest.handleBookingForm(invalidRequest))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("Invalid booking request Please fill all fields");

        verify(bookingRepo, never()).save(any(Booking.class));
    }
}