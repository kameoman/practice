"user strict";

// プロパティの取得等

// {
//   const point = {
//     x: 100,
//     y: 200,
//   };

//   point.x = 120;
//   point['x'] = 120;

//   console.log(point);

//   point.z = 90;
//   delete point.y;
//   console.log(point);
// }

// {
//   const otherProps = {
//     r:4,
//     color: 'red',
//   };
//   const point = {
//     x: 100,
//     y: 200,
//     // 他の定義を持ってくることができる(分割代入)
//     ...otherProps,
//   };

//   point.x = 120;
//   // point['x'] = 120;

//   // console.log(point);

//   point.z = 90;
//   delete point.y;
//   // console.log(point);

//   // レスト構文
//   const{x,r,...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }

// 配列とオブジェクトの組み合わせ
// {
//   const point = {
//     x: 100,
//     y: 200,
//   };

//   // const keys = Object.keys(point);
//   // keys.forEach(key => {
//   //   // 文字列で取得されている.[] を使ってその中に文字列を入れてあげる記法
//   //   console.log(`Key: ${key} value: ${point[key]}`);
//   // });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 30},
//     {x: 40, y: 40},
//   ];
//   // 上記の1のキーのみが取得できる
//   console.log(points[1].y);
// }
// {
//   const str = 'hello';

//   // 文字の一部分を取ることができる
//   // console.log(str.substring(2,4));

//   console.log(str[1]);
// }

// {
//   const d = [2019, 11, 14];
//   // console.log(d.join('/'));

//   const t = '17:08:24';

//   // 分割代入
//   const [hour, minute , second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);

// }

// {
//   const score = [10, 3, 4];

//   let sum = 0;

//   score.forEach((score) => {
//     sum += score;
//   });

//   const avg = sum / score.length;
//   console.log(sum);
//   console.log(avg);
//   console.log(Math.floor(avg));
//   console.log(Math.ceil(avg));
//   console.log(Math.round(avg));
//   console.log(avg.toFixed(3));

//   console.log(Math.random());
// }

// {
//   // 最大値と最小値を表示ずる場合
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// {
//   const d = new Date(2021,10); //０～11までで月は計算される、この場合１１月が表示される
//   d.setHours(10, 20, 30);
//   d.setDate(31); //自動で繰り上げてくれる３１日は１１月に無いため
//   d.setDate(d.getDate() + 3); //３日後の日程を表示してくれる

//   console.log(d);
//   // console.log(d);
//   // 必要な値を取ってくる
//   // console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日 ${d.getDay()} 曜日 ${d.getHours()} 時 ${d.getMinutes()} 分`)

// }

// {
//   // alert('hello');
//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   }else{
//     console.log('中止しました')
//   }
// }

// {
//   let i = 0;

//   function showtime(){
//     console.log(new Date());
//     i ++;
//     // ３回で止める
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }
// // １秒単位でのカウント
//   const intervalId = setInterval(showtime, 1000);
// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1000);
//     i++;
//     if (i > 2){
//       clearTimeout(timeoutId);
//     }
//   }

//   showTime();
// }

// {
//   function update() {
//     // document.querySelector('h1').textContent = 'change!'
//     // document.querySelector('#target').textContent = 'change!'
//     document.getElementById("target").textContent = "change!";
//   }
//   // １秒後に変化する
//   setTimeout(update, 1000);
// }

// {
//   function update() {
//     // querySelectorAllで要素の全てを取ってくることができる
//     // idがある場合は前回のようにgetElementByIDなどが使える
//     // querySelectorは通常項目の最初の１つしか取得できない
//     document.querySelectorAll('p').forEach((p,index) => {
//       p.textContent = `${index}番目のpです！`
//     })
//   }
//   // １秒後に変化する
//   setTimeout(update, 1000);
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const targetNode = document.getElementById("target");
//     targetNode.textContent = "change!";
//     targetNode.title = "This is title!";
//     targetNode.style.color = "white";
//     targetNode.style.backgroundColor = "skyblue";
//   });
// }

// 例外処理の方法eはエラーの意味
// {
//   // const name = 'kameo';
//   const name = 5;

//   try {
// //     console.log(name.toUpperCase());
// //   }catch(e){
// //     console.log(e);
// //   }

// //   console.log('Finish');
// // }

// // {
// //   const posts = [
// //     {
// //       text: 'JavaScriptの勉強中…',
// //       likeCount: 0,
// //       show(){
// //         console.log(`${this.text} - ${this.likeCount}いいね`);
// //       },
// //     },
// //     {
// //       text: 'プログラミングが楽しい！',
// //       likeCount: 0,
// //       show(){
// //         console.log(`${this.text} - ${this.likeCount}いいね`);
// //       },
// //     },
// //   ];

// //   // show(posts[1]);
// //   posts[0].show();
// //   posts[1].show();
// // }

// {
//   class Post {
//     constructor(text){
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//     like(){
//       this.likeCount++;
//       this.show();
//     }
//   }

//   class SponsoredPost extends Post{ //子クラスとしてextendsで引き継ぐことができる
//     constructor(text,sponsor){
//       super(text); //子クラスでthisを引き継いで使う場合にsuperを使う必要がある
//       this.sponsor = sponsor;
//     }

//     show(){
//       super.show();
//       console.log(`...sponsored by ${this.sponsor}`);
//     }
//   }
//   const posts = [
//     new Post('JavaScriptの勉強中…'),
//     new Post('プログラミングが楽しい！'),
//     new SponsoredPost('プログラミングを学ぼう','kamekame'),
//   ];

//   posts[0].like();
//   posts[2].show();S
//   // // show(posts[1]);
//   // posts[0].show();
//   // posts[1].show();
// }

// カスタムデータ属性
// {
//   document.querySelector("button").addEventListener("click", () => {
//     const targetNode = document.getElementById("target");

//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const targetNode = document.getElementById("target");

//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const item2 = document.createElement("li");
//     item2.textContent = "item2";

//     const ul = document.querySelector("ul");
//     ul.appendChild(item2);
//   });
// }
// {
//   document.querySelector('button').addEventListener("click", () => {
//     const item0 = document.querySelectorAll('li')[0];
//     const copy = item0.cloneNode(true); //trueで中のテキストもコピーする

//     const ul = document.querySelector('ul');
//     const item2 = document.querySelectorAll('li')[2];
//     ul.insertBefore(copy,item2);
//   });
// }
// {
//   document.querySelector('button').addEventListener("click", () => {
//     const item1 = document.querySelectorAll('li')[1];

//     // item1.remove();
//     document.querySelector('ul').removeChild(item1);
//   });
// }
// {
//   document.querySelector('button').addEventListener("click", () => {
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);
//     text.value = ''; //値をクリアにして
//     text.focus(); //入力フォームへ自動で移動
//   });
// }
// {
//   document.querySelector('button').addEventListener('click',() => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);
//   });
// }

// ラジオボタン
{
  document.querySelector("button").addEventListener("click", () => {
    const colors = document.querySelectorAll("input");
    let selectedColor;

    colors.forEach((color) => {
      if (color.checked === true) {
        selectedColor = color.value;
      }
    });
    if (typeof selectedColor === "undefined") {
      alert("入力されていません");
      return;
    }
    const li = document.createElement("li");
    li.textContent = selectedColor;
    document.querySelector("ul").appendChild(li);
  });
}
