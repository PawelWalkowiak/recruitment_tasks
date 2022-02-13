import { generateRandomString, generateRandomNumber } from "../../utils/dataGenerator"
const petDataJson = require('../../fixtures/pet')

describe('Petstore api testing', () => {
	var petId = ""
	var categoryId = ""
	var categoryName = ""
	var name = ""
	var photoUrls = ""
	var tagId = ""
	var tagName = ""
	var status = ""

	it('01 - Add a new pet to the store', () => {
    	cy.request('POST', '/pet', 
	    	{
				"id": generateRandomNumber(101),
				"category": {
					"id": generateRandomNumber(101),
				    "name": petDataJson.categoryName + '_' + generateRandomString(3)
				},
				"name": petDataJson.name + '_' + generateRandomString(3),
				"photoUrls": petDataJson.photoUrls,
				"tags": [
				    {
				      "id": generateRandomNumber(101),
				      "name": petDataJson.tagName + '_' + generateRandomString(4)
				    }
				],
				"status": petDataJson.available
	       	}
       	).then((response)=> {
       		cy.log(JSON.stringify(response))
       		petId = response.body.id
       		categoryId = response.body.category.id
       		categoryName = response.body.category.name
       		name = response.body.name
       		photoUrls = response.body.photoUrls[0]
       		tagId = response.body.tags[0].id
       		tagName = response.body.tags[0].name
       		status = response.body.status
       		expect(response.status).to.eq(200)
       	})
	})

	it('02 - Should return invalid input - i think impossible to do on this api', () => {
    	cy.request('POST', '/pet', 
	    	{
				"id": 'error',
				"category": {
					"id": generateRandomNumber(101),
				    "name": petDataJson.categoryName + '_' + generateRandomString(3)
				},
				"name": petDataJson.name + '_' + generateRandomString(3),
				"photoUrls": petDataJson.photoUrls,
				"tags": [
				    {
				      "id": generateRandomNumber(101),
				      "name": petDataJson.tagName + '_' + generateRandomString(4)
				    }
				],
				"status": petDataJson.notAvailable
	       	}
       	).then((response)=> {
       		cy.log(JSON.stringify(response))
       		expect(response.status).to.eq(400)
       	})
	})

	it('03 - Find pet by ID', () => {
    	cy.request('GET', '/pet/'+petId
       	).then((response)=> {
       		cy.log(JSON.stringify(response))
       		expect(response.status).to.eq(200)
       		expect(response.body.id).to.eq(petId)
       		expect(response.body.category.id).to.eq(categoryId)
       		expect(response.body.category.name).to.eq(categoryName)
       		expect(response.body.name).to.eq(name)
       		expect(response.body.photoUrls[0]).to.eq(photoUrls)
       		expect(response.body.tags[0].id).to.eq(tagId)
       		expect(response.body.tags[0].name).to.eq(tagName)
       		expect(response.body.status).to.eq(status)
       	})
	})


	it('04 - Delete a pet', () => {
    	cy.request({
    		method: 'DELETE', 
    		url: '/pet/'+petId, 
    		headers: {
    			'api_key': 'special-key'
    		}
    	}).then((response)=> {
       		expect(response.status).to.eq(200)
       		expect(response.body).to.have.property('code', 200)
       		expect(response.body).to.have.property('type', 'unknown')
       	})
	})
})