package com.example.reactjavaapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.reactjavaapp.model.User;
import com.example.reactjavaapp.repository.UserRepository;

@SpringBootApplication
public class ReactJavaAppApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ReactJavaAppApplication.class, args);
	}
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("Rachel", "Eckels", "theracheleckels@gmail.com"));
		this.userRepository.save(new User("Tony", "Stark", "tony@gmail.com"));
		this.userRepository.save(new User("Gal", "Gadot", "gal@gmail.com"));
		
	}


}
