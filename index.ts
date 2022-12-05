const isBirthday: boolean = true;
const userName: string = "John";
const age: number = 40;

const userData = {
	isBirthday: true,
	userName: "John",
	age: 40,
	messages: { error: "Error" },
};

const createError = (msg: string) => {
	throw new Error(msg);
};

function logBirthday({
	isBirthday,
	userName,
	age,
	messages: { error },
}: {
	isBirthday: boolean;
	userName: string;
	age: number;
	messages: { error: string };
}): string {
	if (isBirthday) {
		return `Congrats ${userName} , your age: ${age + 1}`;
	} else {
		return createError(error);
	}
}
logBirthday(userData);