package com.dynamo.tech.services.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dynamo.tech.services.model.DbUser;
import com.dynamo.tech.services.model.User;
import com.dynamo.tech.services.repository.CreateUserRepository;
import com.dynamo.tech.services.responses.CreateUserResponse;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DynamoTechServicesConroller {
	
	@Autowired
	CreateUserRepository createUserRepository;
	
	@PostMapping("/createUser") 
	public CreateUserResponse handleCreateUser(@RequestBody User user) {
		System.out.println("Inside me");
		DbUser db= new DbUser();
		db.setName(user.getName());
		db.setEmail(user.getEmail());
		db.setAddress(user.getAddressline1()+user.getAddressline2());
		db.setMobileNo(user.getMobileNo());
		CreateUserResponse response = new CreateUserResponse();
		if(createUserRepository.save(db) != null) {
			response.setCode(200);
			response.setStatus("OK");
			response.setMsg("User created succesfully");
		} else {
			response.setCode(400);
			response.setStatus("Failed");
			response.setMsg("User was not created. Try again after some time");
		}
		return response;
	}
}
