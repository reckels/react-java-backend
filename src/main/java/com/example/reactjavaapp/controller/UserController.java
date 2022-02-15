package com.example.reactjavaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.reactjavaapp.links.UserLinks;
import com.example.reactjavaapp.model.User;
import com.example.reactjavaapp.repository.UserRepository;
import com.example.reactjavaapp.service.UserService;

import lombok.extern.slf4j.Slf4j;


@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
@RestController
@RequestMapping("api/")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping(path = UserLinks.LIST_USERS)
	public ResponseEntity<?> listUsers() {
		List<User> resource = userService.getUsers();
		return ResponseEntity.ok(resource);
	}
	
	@PostMapping(path = UserLinks.ADD_USER)
	public ResponseEntity<?> saveUser(@RequestBody User user) {
		User resource = userService.saveUser(user);
		return ResponseEntity.ok(resource);
	}

}
