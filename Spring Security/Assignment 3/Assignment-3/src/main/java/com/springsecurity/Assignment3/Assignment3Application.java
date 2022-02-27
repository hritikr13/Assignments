package com.springsecurity.Assignment3;

import com.springsecurity.Assignment3.model.User;
import com.springsecurity.Assignment3.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class Assignment3Application implements CommandLineRunner {

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(Assignment3Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		User user1 = new User();
		user1.setEmail("hritikr13@gmail.com");
		user1.setUsername("Hritik");
		user1.setPassword(bCryptPasswordEncoder.encode("Boost"));
		user1.setRole("ROLE_ADMIN");

		userRepo.save(user1);

		User user2 = new User();
		user2.setEmail("Aditya@gmail.com");
		user2.setUsername("Aditya Yadav");
		user2.setPassword(bCryptPasswordEncoder.encode("yadav"));
		user2.setRole("ROLE_NORMAL");

		userRepo.save(user2);
	}

}
