package com.app.model.mapper;

import com.app.dto.CategoryDTO;
import com.app.model.model.Category;
import com.app.model.model.Type;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
public interface CategoryMapper {
    Category categoryDTOToCategory(CategoryDTO categoryDTO);

    CategoryDTO categoryToCategoryDTO(Category category);

}
