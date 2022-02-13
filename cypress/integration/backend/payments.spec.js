import { generateRandomString, generatePseudoRandomAmount, generateRandomUuid, generateRandomTerm } from "../../utils/dataGenerator"

describe('Payment api testing', () => {
	var userId = ""
	var typeId = ""
	var distributionModelId = ""
	var title = ""
	var amount = ""
	var deadline = ""
	var academicYear = ""
	var semester = ""

	it('01 - Store a new payment', () => {
    	cy.request('POST', '/v1/payment', 
			{
			  "userId": generateRandomUuid(),
			  "typeId": generateRandomUuid(),
			  "distributionModelId": generateRandomUuid(),
			  "title": generateRandomString(20),
			  "amount": generatePseudoRandomAmount()
			  "deadline": "2020-06-01",
			  "academicYear": "2019/2020",
			  "semester": generateRandomTerm()
			}
       	).then((response)=> {
       		cy.log(JSON.stringify(response))
       		id = response.body.data.id
       		userId = response.body.data.userId
       		typeId = response.body.data.typeId
       		distributionModelId = response.body.data.distributionModelId
       		title = response.body.data.title
       		amount = response.body.data.amount
       		deadline = response.body.data.deadline
       		academicYear = response.body.data.academicYear
       		semester = response.body.data.semester
       		expect(response.status).to.eq(200)
       	})
	})

	it('02 - Should return Invalid request', () => {
    	cy.request('POST', '/v1/payment', 
			{
			  "userId": generateRandomUuid(),
			  "typeId": generateRandomUuid(),
			  "distributionModelId": generateRandomUuid(),
			  "title": 54353,
			  "amount": -342
			  "deadline": "2020-06-01",
			  "academicYear": "2019/2020",
			  "semester": generateRandomTerm()
			}
       	).then((response)=> {
       		cy.log(JSON.stringify(response))
       		expect(response.status).to.eq(400)
       	})
	})

	it('03 - Get a single payment', () => {
    	cy.request('GET', '/v1/payment/'+id
       	).then((response)=> {
       		cy.log(JSON.stringify(response))
       		expect(response.status).to.eq(200)
       		expect(response.body.data.id).to.eq(id)
       		expect(response.body.data.userId).to.eq(userId)
       		expect(response.body.data.typeId).to.eq(typeId)
       		expect(response.body.data.distributionModelId).to.eq(distributionModelId)
       		expect(response.body.data.title).to.eq(title)
       		expect(response.body.data.amount).to.eq(amount)
       		expect(response.body.data.deadline).to.eq(deadline)
       		expect(response.body.data.academicYear).to.eq(academicYear)
       		expect(response.body.data.semester).to.eq(semester)
       	})
	})


	it('04 - Delete the payment', () => {
    	cy.request('DELETE', '/v1/payment/'+id
    	).then((response)=> {
       		expect(response.status).to.eq(200)
       		expect(response.body).to.have.property('code', 200)
       		expect(response.body).to.have.property('type', 'Resource deleted')
       	})
	})
})