const msg: "hello" = "hello";

const serverConfing: { protocol: "http" | "https"; port: 3000 | 3001 } = {
	protocol: "http",
	port: 3000,
};

const startServer: (protocol: "http" | "https", port: 3000 | 3001) => string = (
	protocol: "http" | "https",
	port: 3000 | 3001
): "Server started" => {
	console.log(`Server started on ${protocol}://server:${port}`);
	return "Server started";
};

startServer(serverConfing.protocol, serverConfing.port);

type AnimationFunctionTiming = "ease" | "ease-out" | "ease-in";
type AnimationId = string | number;

function createAnimation(
	id: AnimationId,
	animName: string,
	timingFunc: AnimationFunctionTiming = "ease",
	duration: number,
	iterCount: "infinite" | number
): void {
	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if (elem) {
	console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
	// elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
	// }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");
