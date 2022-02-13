import { Filters } from "../../page-objects/frontend/filters"
import { Validate } from "../../page-objects/frontend/validate"
import { WsbPage } from "../../page-objects/frontend/wsb-page"

describe('WSB page tests', () => {
	const filter = new Filters()
	const validate = new Validate()
	const wsbPage = new WsbPage()

	beforeEach(() => {
		wsbPage.navigate()
	})

	it('Check the content page for tasks one', () => {
		wsbPage.navigateDropdownMenu('Studia I stopnia')
		wsbPage.navigateHorizontalTabs('Kierunki i specjalności')

		filter.selectFilter('Wrocław')
		filter.selectFilter('Studia inżynierskie')
		
		validate.validateNumberOfDirections(3)
		validate.validateSearchResultContentIsCorrect()
		validate.validateSearchBoxExist()
		validate.validateSortExist()
		validate.validateSingUpButtonExist()
	})
})

