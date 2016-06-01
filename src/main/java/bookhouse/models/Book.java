package bookhouse.models;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "book")
public class Book {
	@Id
	@Column(name="id")
    private Long id;
	@Column(name="name")
    private String name;
	@Column(name="IPUSER")
    private String ipUser;
	@Column(name="timestamp")
    private Date timeStamp;

	public Book(){}

	public Book(Long id,String name) {
		this.id = id;
		this.name = name;
	}
	
	public Book(Long id) {
		this.id = id;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIpUser() {
		return ipUser;
	}
	public void setIpUser(String ipUser) {
		this.ipUser = ipUser;
	}
	public Date getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
	
	@Override
	public String toString() {
		return "Book [id=" + id + ", name=" + name + ", ipUser=" + ipUser + ", timeStamp=" + timeStamp + "]";
	}


}
