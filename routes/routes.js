const appRouter = function(app) {
	app.get("/", function(req, res) {
		if (!req.query.number) {
			return res.send({"status": "error", "message": "204 - No Content - missing number"});
		} 
		if (req.query.number<0) {
			return res.send({"status": "error", "message": "204 - No Content - number should be positive"});
		}
		else {
			result = fibonacci(req.query.number);
			return res.send ({"status": "success", "result": result});
			
		}
	});
}

function fibonacci(limit){
	const fib = [0, 1];
	for(let i = 2; i < limit; i++){
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
 }

module.exports = appRouter;