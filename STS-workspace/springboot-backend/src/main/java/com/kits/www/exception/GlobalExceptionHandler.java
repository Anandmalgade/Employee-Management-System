package com.kits.www.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<String>handleResourceNotfoundException(ResourceNotFoundException ex){
		String msg=ex.getMessage();
		
		return new ResponseEntity<String>(msg,HttpStatus.NOT_FOUND);
	}
}
