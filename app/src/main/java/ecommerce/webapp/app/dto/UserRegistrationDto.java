package ecommerce.webapp.app.dto;


public class UserRegistrationDto {

    private String userName;

    private String email;

    private String password;



    public UserRegistrationDto() {
    }


    public UserRegistrationDto(String userName, String email, String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }


    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
