var inti = 1
var int2 = -10
var float1 = 3.14
var str1 = "JavaScriptを覚えよう"

var hello = 'Hello world';
alert(hello + str1);

var orange = 120;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
  alert('みかんとリンゴの値段が同じ')
} else{
  alert('みかんの値段がリンゴより高い');
}

var max = 100;
var num = 5;
var count = 0;

while(num < max){
  num = num * 2;
  count = count +1 ;
}

alert('2をかけて' + max + 'を超えるのに必要だった回数は' + count + '回です');

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は'+ num + 'です');

//メイン部分
var alertString;
alertString = addString("WebCamp");

//作成した関数を呼び出す
alert(alertString);

//作成した関数
function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}



//ジャンケンの手を入力してもらうプロンプト欄を作成
var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー、チョキ、パーのいずれかを入力してください');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください');
}

//ジャンケンの手をランダムに生成する関数を呼び出す
var js_hand = getJShand();

//ユーザーの手と、JavaScriptの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand,js_hand);

//結果を表示する
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\njavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。')
} else{
  alert('またチャレンジしてね')
}

//ランダムでジャンケンの手を生成する関数
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3);//ランダムな整数値を作成する、３は生成したい整数値の＋１を指定している

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}

//ユーザーの手とJavascriptの手を比べる関数
function winLose(user,js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち"
    } else if(js == "パー"){
      winLoseStr = "負け"
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}