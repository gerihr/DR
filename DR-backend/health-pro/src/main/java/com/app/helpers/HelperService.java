package com.app.helpers;

import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;

@Service
public class HelperService {
	public HelperService() {
	}

	public static String generateNewToken() {
		SecureRandom secureRandom = new SecureRandom();
		Base64.Encoder base64Encoder = Base64.getUrlEncoder();
		byte[] randomBytes = new byte[24];
		secureRandom.nextBytes(randomBytes);
		return base64Encoder.encodeToString(randomBytes);
	}

	public static String toJson(String type, String message) {
		if (type.equals("error")) {
			throw new IllegalArgumentException(message);
		} else {
			return "{\"" + type + "\":\"" + message + "\"}";
		}
	}

	public static String valueOfARepresentingKeyInJsonString(String key, String json) {
		String[] temp = json.replaceAll("\\{|\\}", "").split(",");

		for(int i = 0; i < temp.length; ++i) {
			String[] currentKeyValuePair = temp[i].trim().replaceAll(" ", "").split("\":\"");
			if (currentKeyValuePair[0].replace("\"", "").equals(key)) {
				return currentKeyValuePair[1].replace("\"", "");
			}
		}

		return null;
	}
}
