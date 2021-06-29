'user strict';

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
{
  const point = {
    x: 100,
    y: 200,
  };

  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   // 文字列で取得されている.[] を使ってその中に文字列を入れてあげる記法
  //   console.log(`Key: ${key} value: ${point[key]}`);
  // });

  const points = [
    {x: 30, y: 20},
    {x: 10, y: 30},
    {x: 40, y: 40},
  ];
  // 上記の1のキーのみが取得できる
  console.log(points[1].y);
}