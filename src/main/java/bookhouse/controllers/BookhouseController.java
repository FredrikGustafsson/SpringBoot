package bookhouse.controllers;

import java.io.StringReader;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import bookhouse.models.Book;
import bookhouse.models.BookRepository;
import bookhouse.models.DeleteResponse;


@RestController
@RequestMapping("/bookhouse")
public class BookhouseController {
	
@Autowired
private BookRepository bookRepository;

	//http://localhost:8080/bookhouse/test
    @RequestMapping("/test")
    public String Test() {
        return "Test";
    }
    
    @RequestMapping("/")
    public String hello(HttpServletRequest request) {
        String path = request.getServletPath();
        return "hello path:" + path;
    }
	
    //http://localhost:8080/bookhouse/showid/123
    @RequestMapping("/showid/{id}")
    public Book ShowId(@PathVariable("id") Long id) {
    	Book book = bookRepository.findOne(id);
        return book;
    }
    
    //http://localhost:8080/bookhouse/findbyname/abc123
    @RequestMapping("/findbyname/{name}")
    public List<Book> ShowId(@PathVariable("name") String name) {
    	List<Book> bookList = bookRepository.findByName(name);
        return bookList;
    }
    
    //http://localhost:8080/bookhouse/showall
    @RequestMapping("/showall")
    public Iterable<Book> showAll() {
        return bookRepository.findAll();
    }

    //
    @RequestMapping(value = "/save", method = RequestMethod.POST )
    public Book save(@RequestBody Book book) {
        return bookRepository.save(book);
    }
    
    //
    @RequestMapping(value = "/update/{id}/{name}", method = RequestMethod.PUT)
    public Book update(@PathVariable("id") Long id ,@PathVariable("name") String name,  @RequestBody Book book){
    	return bookRepository.save(book);
    }


	//http://localhost:8080/bookhouse/delete/123
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public DeleteResponse delete(@PathVariable("id") Long id) {
    	Book book = bookRepository.findOne(id);
    	if (book == null){
    		DeleteResponse resp = new DeleteResponse(false, "cant find customer");
    		return resp;
    	}
  		bookRepository.delete(book);
  		DeleteResponse resp = new DeleteResponse(true, "");
  		return resp;
    }

 
}
