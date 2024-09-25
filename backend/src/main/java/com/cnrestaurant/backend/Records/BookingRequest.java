package com.cnrestaurant.backend.Records;

import java.time.LocalDateTime;

public record BookingRequest(
        String name,
        String phone,
        LocalDateTime date,
        LocalDateTime time,
        int personCount
) {
}
