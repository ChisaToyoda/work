
//キラキラカーソル↓//

(function (){  //即時関数で囲んでグローバル変数を消すため、この行はこのままで

//in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var colour="random";//★左記の"random"の項目に色名を記述すると記述した１色になる。このままでは虹色
var sparkles=50;    //★原本50。キラキラ星の数

//指定ここまで-----------------★内容物が無くてもHTML5動作可能へ　 2016/04/23-----------
/****************************
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=window.innerWidth, shigh=window.innerHeight;
var sleft=sdown=0;
var tiny=[], star=[], starv=[], starx=[], stary=[], tinyx=[], tinyy=[], tinyv=[];
window.onload=function() {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  sparkle();
}
function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;//■2013年版追加
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout(sparkle, 40);
}
function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else { star[i].style.visibility="hidden"; starv[i]=0; return;}
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;//■2013年版追加
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}
function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else { tiny[i].style.visibility="hidden"; tinyv[i]=0; return;}
  }
  else tiny[i].style.visibility="hidden";
}
document.onmousemove=function (e){ y=e.pageY; x=e.pageX; sdown=window.pageYOffset; sleft=window.pageXOffset;}
function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
/*■2005年分削除  div.style.backgroundColor=color;*/
  return (div);
}
function newColour() {   /*■2013年版追加*/
  var c=new Array();
  c[0]=255;
  c[1]=Math.floor(Math.random()*256);
  c[2]=Math.floor(Math.random()*(256-c[1]/2));
  c.sort(function(){return (0.5 - Math.random());});
  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}
}());//即時関数終了

//グローバルナビのふわふわエフェクト//
$(document).ready(function() {
$('#header').jqFloat({
     width:100,
     height:100,
     speed:1000
});});

//トップページのテキストエフェクト//
jQuery(function () {
    jQuery('.txtefct').textillate({
      loop: true,
      in:{
        effect:'flipinX',
        delayscale:1.5,
        delay:50,
        shuffle: true,
      },
            out:{effect:'flipoutX',
            delayscale:1.5,
            delay:50,
            shuffle: true,}

    });
})



//Aboutusのテキストフェードイン//
jQuery(function() {

  // 一旦hide()で隠してフェードインさせる
  jQuery('.txtfadein').hide().fadeIn(3000);

});

//おそのさんのコメントポップアップ//
$(function() {
   $("#osonophoto").balloon({
     contents:"<p>店頭での接客を担当しているオソノです。<br/>もうすぐ赤ちゃんが産まれるので産休に入ります。<br/>子育て世代にも優しいパン屋さんを目指しています。<br/>忙しいお母さんお父さんに、キキが安心おいしいパンを届けますよー。</p>",
     html:true,
   });
 });




//キキのコメントポップアップ//

$(function() {
   $("#kikiphoto").balloon({
     contents:"<p>はじめまして、魔女のキキです。<br/>魔女は１４歳になると修行に出ます。<br/>この街の人たちと仲良くなりたいのでよろしくお願いします。<br/>落ち込む事もあるけれど、私この街が好きです。</p>",
     html:true,
   });
 });


 $(function() {
    $("#milk").balloon(
      );
  });

  //原材料のテキストエフェクト//
  jQuery(function () {
      jQuery('h1').textillate({
        loop: false,
        in:{
          effect:'pulse',
          delayscale:1.5,
          delay:50,
          sequence: true,
        }
      });
  })

  //メニュータイトルのテキストエフェクト//
  jQuery(function () {
      jQuery('h2').textillate({
        loop: false,
        in:{
          effect:'pulse',
          delayscale:1.5,
          delay:50,
          sequence: true,
        }
      });
  })

//フォーム送信後のアラート//
  function check() {
    Swal.fire({
  imageUrl:'images/thankyou.jpg',
  text:'受付メールが届かない場合はお問い合わせください。',
  background:'rgba(0,25,50,0.5)',
  confirmButtonColor:'rgba(0,25,50,0.9)'
})

  }
