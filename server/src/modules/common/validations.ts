import { body, validationResult } from 'express-validator';


export class Validations {


	getAlertsValidation(req, res) {

		this.string('exchange');
		this.string('ticker');
		this.string('price');
		this.string('time');
		this.string('alertType');

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw errors;
			//return res.status(400).json({ errors: errors.array() });
		}
	}

	//Common validations
	
	string(value:any) {
		body(value).isEmpty().trim().escape();
	}
	float(value:any) {
		body(value).isFloat().trim().escape();
	}

}