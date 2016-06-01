package bookhouse.models;

public class DeleteResponse { 
    private Boolean errorStatus;
    private String responseText;
    
	public DeleteResponse(Boolean errorStatus, String responseText) {
		super();
		this.errorStatus = errorStatus;
		this.responseText = responseText;
	}
	public Boolean getErrorStatus() {
		return errorStatus;
	}
	public void setErrorStatus(Boolean errorStatus) {
		this.errorStatus = errorStatus;
	}
	public String getResponseText() {
		return responseText;
	}
	public void setResponseText(String responseText) {
		this.responseText = responseText;
	}
    
}