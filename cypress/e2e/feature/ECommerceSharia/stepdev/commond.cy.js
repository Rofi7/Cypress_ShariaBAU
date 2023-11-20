const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { commonAction } = require("../../../../support/ECommerceSharia/action/common/commonAction.cy");

Given('User access ECommerce Sharia page', () => {
    commonAction.visitingDashboard()
})
