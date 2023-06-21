package com.app.model.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(name = "category")
    private String category;

    @OneToMany (fetch = FetchType.LAZY, mappedBy = "category")
    private List<Type> typeList;

    public Category() {
    }

    public Category(long id, String category, List typeList) {
        super();
        this.id = id;
        this.category = category;
        this.typeList = typeList;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<Type> getTypeList() {
        return typeList;
    }

    public void setTypeList(List<Type> typeList) {
        this.typeList = typeList;
    }

}