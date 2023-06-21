package com.app.message;

public class ResponseFile {
	private String name;
	private String url;
	private String type;
	private long size;
	private Long userId;

	public ResponseFile(String name, String url, String type, long size, final Long userId) {
		this.name = name;
		this.url = url;
		this.type = type;
		this.size = size;
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public long getSize() {
		return size;
	}

	public void setSize(long size) {
		this.size = size;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(final Long userId) {
		this.userId = userId;
	}

}
