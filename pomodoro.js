export class Pomodoro {
	let started, time;
	
	public Pomodoro(time){
		this.time = time;
		this.started = false;
	}

	start(){
		this.started = true;
	}
	end(){
		this.started = false;
	}
}
