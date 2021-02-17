package com.dynamo.tech.services.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dynamo.tech.services.model.DbUser;

@Repository
public interface CreateUserRepository extends CrudRepository<DbUser, Long>{

}
