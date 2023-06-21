package com.app.configuration;

import com.app.model.mapper.*;
import com.app.storage.CityStorage;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import lombok.AllArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.util.List;

@Configuration
@ConditionalOnProperty(value = "springdoc.api-docs.enabled", havingValue = "true")
@ConfigurationPropertiesScan("com.app.configuration")
@AllArgsConstructor
public class ApplicationConfig {

    private final SwaggerProperties swaggerProperties;

    @Bean
    public UserMapper userMapper() {
        return new UserMapperImpl();
    }

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI().info(getInfo()).servers(getServers());
    }

    private Info getInfo() {
        return new Info()
                .title(swaggerProperties.getProperties().getTitle())
                .description(swaggerProperties.getProperties().getDescription());
    }

    @Bean
    public CityStorage cityStorage() throws IOException {
        return new CityStorage();
    }

    private List<Server> getServers() {
        return List.of(new Server().url(swaggerProperties.getServerUrl()));
    }

}
