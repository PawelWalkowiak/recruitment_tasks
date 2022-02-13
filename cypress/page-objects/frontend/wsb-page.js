export class WsbPage {
	navigate() {
		cy.visit('https://www.wsb.pl/')
		cy.contains('button', 'Akceptuję politykę plików cookies').click()
	}

	navigateDirectAddress(directAddress) {
		cy.visit(directAddress)
		cy.contains('button', 'Akceptuję politykę plików cookies').click()
	}

	navigateDropdownMenu(menuValue) {
		cy.get('.links > .expandable > .dropdown').invoke('show')
		cy.contains('.dropdown > .menu a', menuValue).click()
	}

	navigateHorizontalTabs(tabValue) {
		cy.contains('.horizontal-tabs a', tabValue).click()
	}
}