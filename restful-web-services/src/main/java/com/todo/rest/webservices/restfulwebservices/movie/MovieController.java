package com.todo.rest.webservices.restfulwebservices.movie;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("api/movie")
@RestController
@CrossOrigin
public class MovieController {
	
	List<Movie> movies = new ArrayList<>(Arrays.asList(
			new Movie("The Usual Suspects", 8.5f), 
			new Movie("What about Bob", 8.4f), 
			new Movie("Stranger Than Fiction", 7.8f), 
			new Movie("Schindlers List", 8.6f)
			)) ;

	@GetMapping("GetAllMovies")
	public List<Movie> GetAllMovies(){
		return this.movies;
	}
}
