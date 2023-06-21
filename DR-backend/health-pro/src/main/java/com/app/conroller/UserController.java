package com.app.conroller;

import com.app.dto.UserDTO;
import com.app.model.entitites.User;
import com.app.repository.UserRepository;
import com.app.service.EmailSenderService;
import com.app.service.UserService;
import com.app.swagger.SwaggerErrorResponses;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static com.app.configuration.WebPath.API_VERSION_1;
import static com.app.configuration.WebPath.PATH_USERS;

@RestController
@RequestMapping(API_VERSION_1)
@CrossOrigin(origins = "localhost:4200")
@Tag(name = "User operations", description = "Basic CRUD operations related to users")
public class UserController {

    private final UserService userService;

    @Autowired
    private EmailSenderService senderService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, EmailSenderService senderService, UserRepository userRepository) {
        this.userService = userService;
        this.senderService = senderService;
        this.userRepository=userRepository;
    }

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody ObjectNode emailAndPasswordInJson) {

        return userService.loginUser(emailAndPasswordInJson);
    }

    @GetMapping("/get-admins")
    public List<User> getAdmins(){
        List<User> allUsers = (List<User>) userRepository.findAll();
        Predicate<User> onlyAdmins = user -> user.getType().equals("admin");


        var result = allUsers.stream().filter(onlyAdmins)
                .collect(Collectors.toList());

        return result;
    }

    @PostMapping("/new-admin")
    public ResponseEntity newAdmin (@RequestBody ObjectNode emailAndPasswordInJson) {
        return userService.createAdmin(emailAndPasswordInJson);
    }

    @PostMapping("/delete-admin")
    public ResponseEntity deleteAdmin (@RequestBody Long id) {
         userRepository.deleteById(id);
         return ResponseEntity.ok().body("Админа беше успешно премахнат");
    }

    @PutMapping("/logout")
    public ResponseEntity logout(@RequestHeader("session-token") String sessionToken) {
        return userService.logOutUser(sessionToken);
    }

    @GetMapping(PATH_USERS)
    @Operation(summary = "Retrieves all users")
    @SwaggerErrorResponses
    public Iterable<User> retrieveFutureDevices() {
        return userService.retrieveAllUsers();
    }
}
