package com.app.model.mapper;

import com.app.dto.CategoryDTO;
import com.app.model.model.Category;
import com.app.repository.TypeRepository;
import org.springframework.stereotype.Component;

@Component
public class CategoryTypesMapper {
    private  final TypeRepository typeRepository;

    public CategoryTypesMapper(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    public Category setCategoryParams(CategoryDTO categoryDTO, long typeId){
        Category category = new Category();
        category.setCategory(categoryDTO.getCategory());
        category.setTypeList(typeRepository.findByCategory_id(typeId));
        return category;
    }
}
