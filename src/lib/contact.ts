export interface FormData {
	name: string;
	email: string;
	message: string;
}

export const handleSubmit = async (data: Event, setStatus: (status: string) => void) => {
	data.preventDefault();

	setStatus('submitting...');
	const formData = new FormData(data.currentTarget as HTMLFormElement);
	const object = Object.fromEntries(formData);
	object.access_key = '8cdcaf12-0eab-417e-b881-4f00ef1c45d3';
	const json = JSON.stringify(object);

	const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: json
	});

	const result = await response.json();
	if (result.success) {
		setStatus('message sent!');
	} else {
		setStatus('error sending message');
	}
};
