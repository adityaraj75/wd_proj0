  console.log("bla\n");
  var clicks=0;
  var board=new Array(3);
  for(var i=0;i<3;i++)
    board[i]=new Array(3);
  for(var i=0;i<3;i++)
    for(var j=0;j<3;j++)
      board[i][j]=0;

  var spans = document.getElementsByTagName('span');
  for(var i=0;i<spans.length;i++)
  	document.getElementById(spans[i].id).addEventListener("click",modify);
  var gameon=1;
  function winner(player)
  {
    var flag=0;
    for(var i=0;i<3;i++)
    {
      var temp=0;
      for(var j=0;j<3;j++)
      {
        if(board[i][j]!=player)
          break;
        else
        {
          temp++;
        }
      }
      if(temp==3)
        return true;
    }
    for(var i=0;i<3;i++)
    {
      var temp=0;
      for(var j=0;j<3;j++)
      {
        if(board[j][i]!=player)
          break;
        else
        {
          temp++;
        }
      }
      if(temp==3)
        return true;
    }
    var temp=0;
    for(var i=0;i<3;i++)
      if(board[i][i]==player)
        temp++;
    if(temp==3)
      return true;
    temp=0;
    for(var i=2;i>=0;i--)
      if(board[2-i][i]==player)
        temp++;
    if(temp==3)
      return true;
    return false;
  }

  function init()
  {
    for(var i=0;i<3;i++)
      for(var j=0;j<3;j++)
        board[i][j]=0;
    for(var i=0;i<spans.length;i++)
      document.getElementById(spans[i].id).firstChild.innerHTML="";
    document.getElementById("winner").innerHTML="Player 1's turn ";      
  }


  function modify()
  {
    if(gameon)
    {
      var cellid=this.id;
      var ourid=Number(cellid);
      if(board[Math.floor(ourid/3)][ourid%3]==0)
      {
        if(clicks%2==0)
        {
            clicks++;
            document.getElementById(cellid).firstChild.innerHTML="X";
            board[Math.floor(ourid/3)][ourid%3]=1;
            if(winner(1))
            {
              document.getElementById("winner").innerHTML="Player 1 Wins !!!";
              gameon=0;
            }
            else
            {
                if(clicks==9)
                {
                  document.getElementById("winner").innerHTML="Draw";
                }
                else
                {
                  document.getElementById("winner").innerHTML="Player 2's turn ";
                }
            }
        }
        else
        {
          clicks++;
          document.getElementById(cellid).firstChild.innerHTML="O";
          board[Math.floor(ourid/3)][ourid%3]=2;
          if(winner(2))
          {
            document.getElementById("winner").innerHTML="Player 2 Wins !!!";
            gameon=0;
          }
          else
          {
              if(clicks==9)
              {
                document.getElementById("winner")="Draw";
              }
              else
              {
                document.getElementById("winner").innerHTML="Player 1's turn ";
              }
          }
        }
      }
    }
  }
