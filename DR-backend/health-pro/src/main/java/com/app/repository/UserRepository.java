package com.app.repository;

import com.app.model.entitites.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByIdNumber(String egn);

    User findById(int id);

    User findBySessionToken(String sessionToken);
}
