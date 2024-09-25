package com.cnrestaurant.backend.Records;

public record ContactRequest(
        String name,
        String email,
        String subject,
        String message
) {
}