package com.cnrestaurant.backend.Service;

import com.cnrestaurant.backend.Entity.Contact;
import com.cnrestaurant.backend.Exception.ResourceNotFoundException;
import com.cnrestaurant.backend.Records.ContactRequest;
import com.cnrestaurant.backend.Repo.ContactRepo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.*;

class ContactImplTest {

    @Mock
    private ContactRepo contactRepo;

    @InjectMocks
    private ContactImpl underTest;

    private AutoCloseable autoCloseable;

    private ContactRequest contactRequest;


    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        contactRequest = new ContactRequest(
                "John",
                "1234567890",
                "subject",
                "message"
        );
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void handleContactForm() {
        underTest.handleContactForm(contactRequest);

        verify(contactRepo, times(1)).save(argThat(
                        contact ->
                                contact.getName().equals(contactRequest.name()) &&
                                        contact.getEmail().equals(contactRequest.email()) &&
                                        contact.getSubject().equals(contactRequest.subject()) &&
                                        contact.getMessage().equals(contactRequest.message())
                )
        );
    }

    @Test
    void handleContactFormThrowsExceptionIfAnyNull() {

        assertThatThrownBy(() ->
                underTest.handleContactForm(new ContactRequest(
                        null,
                        contactRequest.email(),
                        contactRequest.subject(),
                        contactRequest.message()
                )))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessage("Invalid contact request Please fill all fields");

        verify(contactRepo, never()).save(any(Contact.class));
    }
}