import React from 'react';

const Categories = (props) => {

    const {categories} = props;

    const renderCategorie = (categorie, index) => {
        return (
            <button key={index} className={"m-3 btn btn-outline-primary"} disabled>
                {categorie}
            </button>
        );
    }

    const renderCategories = () => {
        return categories.map((categorie, index) => {
            return renderCategorie(categorie, index);
        });
    }

    return (
        <div className={"d-flex border-top mt-5"}>
            {renderCategories()}
        </div>
    );
};

export default Categories;
