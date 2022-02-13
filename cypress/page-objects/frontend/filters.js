export class Filters {
	selectFilter(filterValue) {
		cy.contains("label[class='styled-input checkbox']", filterValue).click()
	}

	clearFilters() {
		cy.contains('.clear-all', 'Wyczyść filtry').click()
	}
}