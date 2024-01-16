package ecommerce.webapp.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.webapp.app.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserName(String username);
}
