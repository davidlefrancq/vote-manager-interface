class QuestionnaireBo{
    index;
    indexCategorie;
    name;
    questions;

    constructor(index, indexCategorie, name, questions) {
        this.index = index;
        this.indexCategorie = indexCategorie;
        this.name = name;
        this.questions = questions;
    }
}

export default QuestionnaireBo;
