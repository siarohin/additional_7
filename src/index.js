module.exports = function solveSudoku(matrix) {
	
	const arr = matrix.concat();
	
	for (let i = 0; i < 9; i++) {

		for (let j = 0; j < 9; j++) {
			
			matrix[i][j] == '' ? arr[i][j] = [].concat() : '';

		}

	}

	return arr;

}
