package com.cnrestaurant.backend.Service;

import com.cnrestaurant.backend.Records.ContactRequest;
import org.springframework.stereotype.Service;


public interface ContactService {
    void handleContactForm(ContactRequest contactRequest);
}
