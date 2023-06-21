package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Service
public class EmailSenderService {
        @Autowired
        private JavaMailSender mailSender;
        public void sendEmail (String toEmail,
                               String subject,
                               String code, String firstName) {


            SimpleMailMessage message=new SimpleMailMessage();
            message.setFrom("healthPro@gmail.com");
            message.setTo(toEmail);
            message.setText ("Здравейте, " +firstName + "! Вашият код за достъп до системата е: " + code);
            message.setSubject (subject);
            mailSender.send(message);
        }
}
