// individual functions for each question so that when I create the Questions.vue from parent
// pass in index of question, and the function related to that question
//question component will run that function soon as person chooses answer and return the list of characters.
import quiz from "../assets/quiz.json";
import characters from "../assets/characters.json";

export const store = {
    state: {
        currentQuestion: 0,
        // answeredQuestion: 0,
        currentStatus: "Skip",
        picked: null,
        chosenTraits: [],
        jsonQuestion: quiz.questions,
        totalQuestions: quiz.questions.length,
        jsonCharacters: characters.characters,
        final: 0
    },
    nextButton(){
        this.state.chosenTraits[this.state.currentQuestion] = this.state.picked;
        if(this.state.chosenTraits[this.state.currentQuestion+1] != null){
            console.log("already chosen: "+ this.state.chosenTraits[this.state.currentQuestion+1]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion+1];
            console.log(this.state.chosenTraits);
        }
        if(this.state.currentQuestion>= this.state.totalQuestions-1){
            this.state.currentStatus = "Submit";
            this.state.currentQuestion = this.state.totalQuestions-1;
            window.open("#/recommendation", "_self");
            this.pointAssign();//need to fix where this goes- wait no i don't
            
        }
        this.state.currentQuestion++;
        this.state.currentStatus = "Skip";
    },

    backButton(){
        this.state.currentQuestion--;
        if(this.state.chosenTraits[this.state.currentQuestion] != null){
            console.log("already chosen: "+ this.state.chosenTraits[this.state.currentQuestion]);
            this.state.picked = this.state.chosenTraits[this.state.currentQuestion];
        }
        else{
            this.state.currentStatus = "Skip";
        }

        if(this.state.currentQuestion <= 0){
            console.log("this is the first question");
            this.state.currentQuestion = 0;
        }
    },
    answerAsButton(){
        this.state.currentStatus = "Next";
        if(this.state.currentQuestion+1 == this.state.jsonQuestion.length){
            // alert("this is the last question");
            this.state.currentStatus = "Submit";
        }
    },
    pointAssign(){
        for(var i=0; i< this.state.jsonCharacters.length;i++){ 
            for(var j=0;j<this.state.chosenTraits.length;j++){
                // var indextrait = this.state.chosenTraits.find(a => a.includes(this.state.jsonCharacters[j].tags[i]));
                // if(indextrait != undefined){ //need it to contain,maybe will have to be other way round, split the strings
                //     console.log(indextrait);
                // }
                console.log("Character: "+ this.state.jsonCharacters[i].name+ " - " +this.state.jsonCharacters[i].tags[j]);
            }
        }
    }
}