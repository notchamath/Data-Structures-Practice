//Problem: How many ways are there to get to point (i,j) if you started at point (0,0)?

//function takes in the size of the matrix and outputs the num of different ways to get to the final point (m,n)
function uniquePath(m, n){

	//create multidimentional array of size (m x n)
	let dp = new Array(m);
	for(let i = 0; i < m; i++){
		dp[i] = new Array(n);
	}

	//base case
	dp[0][0] = 1;

	//keep adding the num of ways to get to the point leading up to the point you want to get to 
	for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++){
			if(i > 0 && j > 0){
				dp[i][j] = dp[i-1][j] + dp[i][j-1];
			} else if(i > 0){
				dp[i][j] = dp[i-1][j];
			} else if(j > 0){
				dp[i][j] = dp[i][j-1];
			}
		}
	}
	return dp[m-1][n-1];
}


//m = height of matrix
//n = width of matrix
let m = 3;
let n = 4;

uniquePath(m, n);