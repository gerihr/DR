//package com.app.service;
//
//import ie.corballis.fixtures.util.StringUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//
//@Service
//public class FileStorageService {
//
//	@Autowired
//	private FileRepository fileRepository;
//
//	public File store(MultipartFile file, Long userId) throws IOException {
//		String fileName = null;
//		if(file.getOriginalFilename()!=null) {
//			fileName = StringUtils.cleanPath(file.getOriginalFilename());
//		}
//		File fileDB = new File(file.getContentType(), file.getBytes());
//		return fileRepository.save(fileDB);
//
//	}
//
//	public File getFile(String id) {
//		return fileRepository.findById(id).get();
//	}
//
////	public Stream<File> getAllFiles(Long id) {
////		return fileRepository.findAll().stream().filter(file -> file.getUserId().equals(id));
////	}
//}
