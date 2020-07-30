const TestInitialize = require('@/../../helpers/test-initialize.js');
const HomePage = require('@/../../pageObjects/home.page.js');
const ChallengePage = require('@/../../pageObjects/challenge.page.js');
import { Constants } from "@/../../helpers/constants.js";

describe('Test website navigation', function () {
  it('Visit webpage', function() {
    TestInitialize.launchWebsite();
  })
})

describe('Test render challenge page', function () {
    it('Visit Render challenge page', function() {
      HomePage.renderTheChallenge();
    })
})

describe('Create Array from table elements', function () {
    it('Create Array, get equilibrium element and submit the answers', function() {      

      var ele1 = ChallengePage.findEquiSumElement(ChallengePage.getArrayElements(1));
      var ele2 = ChallengePage.findEquiSumElement(ChallengePage.getArrayElements(2));
      var ele3 = ChallengePage.findEquiSumElement(ChallengePage.getArrayElements(3));

      ChallengePage.fillAnswers(1, ele1);
      ChallengePage.fillAnswers(2, ele2);
      ChallengePage.fillAnswers(3, ele3);
      ChallengePage.fillAnswers(4, Constants.NAME);
    })

   it('Submit the answers', function() {
    ChallengePage.submitAnswers();
   })

    it('Close Dialogue box', function() {
    ChallengePage.closeDialogueBox();
   })
   
})
