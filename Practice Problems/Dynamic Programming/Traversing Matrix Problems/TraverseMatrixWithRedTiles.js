//Problem: How many ways are there to get to point (i,j) if you started at point (0,0) and avoid all Red tiles?

//function takes in the the matrix and outputs the num of different ways to get to the final point (m,n), while avoiding red tiles
function uniquePath(grid){

	//create multidimentional array of size (m x n)
	let m = grid.length;
	let n = grid[0].length;

	let dp = [m];
	for(let i = 0; i < m; i++){
		dp[i] = [n];
	}

	//base case
	dp[0][0] = 1;

	//keep adding the num of ways to get to the point leading up to the point you want to get to, avoid red tiles
	for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++){
			if(grid[i][j] === 1){
				dp[i][j] = 0;
				continue;
			}
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

//matrix, 1s indicate red tiles
let grid = [
	[0,0,0,0],
	[0,0,1,1],
	[0,0,0,0]
];

uniquePath(grid);