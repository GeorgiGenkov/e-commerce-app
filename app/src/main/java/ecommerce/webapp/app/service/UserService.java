package ecommerce.webapp.app.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import ecommerce.webapp.app.dto.UserRegistrationDto;
import ecommerce.webapp.app.model.User;

public interface UserService extends UserDetailsService{
    
    User save(UserRegistrationDto registrationDto);
}
