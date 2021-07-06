import React from 'react';

const Categorie = (props) => {

    const {submitCategorie} = props;

    return (
        <div className={"container-fluid m-2"}>
            <h2 className={"text-start border-top"}>Catégorie</h2>

            <form onSubmit={submitCategorie}>
                <input className={"form-control"} name={"categorie"}/>

                <div className={"text-end mt-2"}>
                    <input className={"btn btn-primary"} type={"submit"}/>
                </div>
            </form>
        </div>
    );
};

export default Categorie;
