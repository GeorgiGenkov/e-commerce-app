package ecommerce.webapp.app.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import ecommerce.webapp.app.dto.UserRegistrationDto;
import ecommerce.webapp.app.service.UserService;

@Controller
public class UserRegistrationController {
    
    private UserService userService;


    public UserRegistrationController(UserService userService) {
        super();
        this.userService = userService;
    }

    @ModelAttribute("user")
    public UserRegistrationDto userRegistrationDto() {
        return new UserRegistrationDto();
    }

    @GetMapping("/authentication")
    public String showRegistrationForm() {
        return "authentication";
    }

    @PostMapping("/authentication")
    public String registerUserAccount(@ModelAttribute("user") UserRegistrationDto userRegistrationDto) {

        userService.save(userRegistrationDto);

        return "redirect:/authentication";
    }



}
