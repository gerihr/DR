package com.app.service;

import com.app.exception.UserAuthenticationException;
import com.app.helpers.HelperService;
import com.app.model.entitites.User;
import com.app.model.mapper.UserMapper;
import com.app.repository.UserRepository;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public ResponseEntity createAdmin (ObjectNode usernameAndPasswordInJson){
        User newAdmin = new User();
        newAdmin.setIdNumber(usernameAndPasswordInJson.get("username").asText());
        newAdmin.setCode(usernameAndPasswordInJson.get("password").asText());
        newAdmin.setType("admin");
        userRepository.save(newAdmin);
        return new ResponseEntity<>(newAdmin, HttpStatus.OK);
    }

    public ResponseEntity loginUser(ObjectNode egnAndCodeInJson) {
        String egn = egnAndCodeInJson.get("idNumber").asText();
        String code = egnAndCodeInJson.get("code").asText();
        User user;
        try {
            user = authenticateAndReturnUser(egn, code);
            user.setSessionToken(HelperService.generateNewToken());
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (UserAuthenticationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity logOutUser(String sessionToken) {
        User user = userRepository.findBySessionToken(sessionToken);
        if (user == null) {
            return new ResponseEntity<>("Incorrect sessionToken", HttpStatus.BAD_REQUEST);
        }
        user.setSessionToken(null);
        userRepository.save(user);
        return new ResponseEntity<>("Logout successful", HttpStatus.OK);
    }

    public Iterable<User> retrieveAllUsers() {
        return userRepository.findAll();
    }

    private User authenticateAndReturnUser(String egn, String code) {
        User user = userRepository.findByIdNumber(egn);
        if (user == null) {
            throw new UserAuthenticationException("Грешнен идентификационен номер или код за достъп");
        }
        if (code.equals(user.getCode())) {
            return user;
        } else {
            throw new UserAuthenticationException("Грешно идентификационен номер или код за достъп");
        }
    }

    public String generateUserCode () {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }

    public User getUserBySessionToken(String sessionToken) {
        return userRepository.findBySessionToken(sessionToken);
    }

    public User getUserById(int id) {
        return userRepository.findById(id);
    }
}
