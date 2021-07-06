class QuestionBo{
    index;
    indexCategorie;
    indexQuestionnaire;
    titre;
    question;
    image;
    reponses;

    constructor(index, indexCategorie, indexQuestionnaire, titre, question, image, reponses) {
        this.index = index;
        this.indexCategorie = indexCategorie;
        this.indexQuestionnaire = indexQuestionnaire;
        this.titre = titre;
        this.question = question;
        this.image = image;
        this.reponses = reponses;
    }
}

export default QuestionBo;
