import React from 'react';

const CategorieForm = (props) => {

    const {categories, categorieChange} = props;

    const renderCategoryFormOption = (index, name) => {
        return (
            <option key={index} value={index}>{name}</option>
        );
    }

    const renderCategoriesFormOptions = () => {
        return categories.map((category, index) => {
            return renderCategoryFormOption(index, category);
        });
    }

    const renderCategoriesFormSelect = () => {
        if (categories.length > 0) {
            return (
                <select className="form-select" name={"indexCategorie"} onChange={categorieChange}>
                    <option></option>
                    {renderCategoriesFormOptions()}
                </select>
            );
        } else {
            return (
                <select className="form-select disabled" name={"indexCategorie"} disabled>
                    <option></option>
                </select>
            );
        }
    }

    return renderCategoriesFormSelect();
};

export default CategorieForm;
