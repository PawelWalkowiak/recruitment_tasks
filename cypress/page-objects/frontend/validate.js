export class Validate {
	validateNumberOfDirections(expectedValue) {
		cy.get('.study-directions').find('.direction').should('have.length', expectedValue)
	}

	validateSearchResultContentIsCorrect() {
		cy.get('.study-directions').find('.direction').each(($item) => {
			cy.wrap($item).find('.direction-img img').should("exist")
			cy.wrap($item).find('.direction-title .title').should("exist")
			cy.wrap($item).find('.direction-title .cities').should("exist")
		})
	}

	validateSearchBoxExist() {
		cy.contains('.search-box', 'Szukaj').should('exist')
	}


	validateSortExist() {
		cy.contains(".sort", "Sortuj").should("exist")
	}
	
	validateSingUpButtonExist() {
		cy.contains('.cta-wrapper > .button', 'Zapisz się online').should("exist")
		cy.contains('.cta > .button', 'Zapisz się online').should("exist")
	}
}