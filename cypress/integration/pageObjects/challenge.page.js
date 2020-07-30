export default {
    createArray : createArray,
    getArrayElements: getArrayElements,
    findEquiSumElement: findEquiSumElement,
    fillAnswers: fillAnswers,
    submitAnswers: submitAnswers,
    closeDialogueBox: closeDialogueBox
};

let ChallengePageControls = {
    Array1Elements: 'table > tbody > tr:nth-child(1) > td',
    Array2Elements: 'table > tbody > tr:nth-child(2) > td',
    Array3Elements: 'table > tbody > tr:nth-child(3) > td',

    Submit1TextBox: '[data-test-id="submit-1"]',
    Submit2TextBox: '[data-test-id="submit-2"]',
    Submit3TextBox: '[data-test-id="submit-3"]',
    YourNameTextBox: '[data-test-id="submit-4"]',

    SubmitAnswersButton : 'span[text ="Submit Answers"]',
    DialoguBox : '.dialog',
};

function getArrayElements(num){
    var arr = [];
    if(num==1){
        var el = ChallengePageControls.Array1Elements;
    }
    if(num==2){
        var el = ChallengePageControls.Array2Elements;
    }
    if(num==3){
        var el = ChallengePageControls.Array3Elements;
    }
     
    return createArray(el).each(a, arr => {        
    if(typeof a.slice() !== 'object'){
        arr.push(parseInt(a.slice()));
        cy.log("val : "+ a.slice());
        }            
    }); 
}

function createArray(el){ 
    var arr = [];
    return cy.get(el).each(($element, index, arr) => {
        arr.push($element.text());
    });  
}

function findEquiSumElement(arr){
    let len = arr.length;
    let left_sum = 0, right_sum = 0;
    let i, j;

    for(i = 0, j = len-1 ; i < j ; i++, j-- ){  
        left_sum += arr[i]; 
        right_sum += arr[j]; 
          
        // Keep moving i towards center until  
        // left_sum is found lesser than right_sum 
        while(left_sum < right_sum && i < j){ 
            i++; 
            left_sum += arr[i]; 
        } 
        // Keep moving j towards center until  
        // right_sum is found lesser than left_sum 
        while(right_sum < left_sum && i < j){  
            j--; 
            right_sum += arr[j]; 
        } 
    } 
    if(left_sum == right_sum) {
        cy.log('The number is : ' + arr[i]);
        return arr[i];
    }          
    else
        return -1; 

}

function fillAnswers(num, input){
    switch(num){
        case 1:
            cy.get(ChallengePageControls.Submit1TextBox).clear().type(input);
            break;
        case 2:
            cy.get(ChallengePageControls.Submit2TextBox).clear().type(input);
            break;
        case 3:
            cy.get(ChallengePageControls.Submit3TextBox).clear().type(input);
            break;
        case 4:
            cy.get(ChallengePageControls.YourNameTextBox).clear().type(input);
            break;
    }   

}

function submitAnswers(){
    cy.contains('Submit Answers').click();
    cy.contains('Close').should('be.visible');
}

function closeDialogueBox(){
    cy.contains('Close').click();
}