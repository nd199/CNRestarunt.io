package com.cnrestaurant.backend.Service;


import com.cnrestaurant.backend.Entity.Contact;
import com.cnrestaurant.backend.Exception.ResourceNotFoundException;
import com.cnrestaurant.backend.Records.ContactRequest;
import com.cnrestaurant.backend.Repo.ContactRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class ContactImpl implements ContactService {

    private final ContactRepo contactRepo;

    public ContactImpl(ContactRepo contactRepo) {
        this.contactRepo = contactRepo;
    }

    @Override
    public void handleContactForm(ContactRequest contactRequest) {

        if (!checkNotNull(contactRequest)) {
            throw new ResourceNotFoundException(
                    "Invalid contact request Please fill all fields");
        }

        Contact contact = new Contact(
                contactRequest.name(),
                contactRequest.email(),
                contactRequest.subject(),
                contactRequest.message()
        );

        contactRepo.save(contact);
    }

    private boolean checkNotNull(ContactRequest contactRequest) {
        return contactRequest.name() != null && contactRequest.email() != null
                && contactRequest.subject() != null && contactRequest.message() != null;
    }
}
