if (document.querySelector)
{
	document.documentElement.classList.add('js');
	
    var ticTacToeElement = document.querySelector('#tic-tac-toe');
    
    var PlayerXMove = true;
    
	var board = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];

	ticTacToeElement.addEventListener('click', tictactoeClickHandler);
}

function tictactoeClickHandler(event)
{
	var targetElement = event.target;
	var parentElement = targetElement.parentElement;
	var row, column;
	
	if (targetElement.nodeName == 'BUTTON')
	{
		row = parseInt(targetElement.dataset.row);
		column = parseInt(targetElement.dataset.column);
		
		board[row][column] = PlayerXMove ? 1 : -1;
		
		parentElement.innerHTML = PlayerXMove ? 'x' : 'o';
        parentElement.classList.add(PlayerXMove ? 'px' : 'po');
        
        

		if (gameFinished())
		{
            if(PlayerXMove)
            {
                var s = document.getElementById('player1').textContent
                document.getElementById('player1').textContent = parseInt(s)+1;
            }
            else
            {
                var s2 = document.getElementById('player2').textContent
                document.getElementById('player2').textContent = parseInt(s2)+1;
            }

			alert('Game over. ' + (PlayerXMove ? 'X' : 'O') + ' wins.');
		}
		else
		{
			PlayerXMove = !PlayerXMove;
		}
	}
}

function restart()
{
    var s = document.getElementById('player1').textContent;
    var s2 = document.getElementById('player2').textContent;
   
    window.location.reload();

 
    document.getElementById('player1').textContent = s;

    document.getElementById('player2').textContent =s2;

}

function gameFinished()
{
	var sum;
	
	for (var i = 0; i < 3; i++){
		sum = 0;
		
		for (var j = 0; j < 3; j++){
			sum += board[i][j];
		}
		if (Math.abs(sum) == 3){
			return true;
		}
	}
	
	for (var j = 0; j < 3; j++){
		sum = 0;
		
		for (var i = 0; i < 3; i++){
			sum += board[i][j];
		}
		if (Math.abs(sum) == 3){
			return true;
		}
	}

	sum = 0;

	for (var i = 0; i < 3; i++){
		sum += board[i][i];
	}

	if (Math.abs(sum) == 3){
		return true;
	}

	sum = 0;

	for (var i = 0; i < 3; i++){
		sum += board[i][2 - i];
	}

	if (Math.abs(sum) == 3){
		return true;
	}

	return false;
}

