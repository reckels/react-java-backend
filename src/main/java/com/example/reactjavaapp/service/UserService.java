package com.example.reactjavaapp.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.reactjavaapp.model.User;
import com.example.reactjavaapp.repository.UserRepository;

@Component
public class UserService {
	
	private UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}
}
