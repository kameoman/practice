'user strict' ;

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      // aタグのリンクを実施されないようにする
      e.preventDefault();

      // 他のアクティブクラスを外す
      menuItems.forEach(item =>{
        item.classList.remove('active')
      });
      // クリックしたらactiveになるように変更する
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

'user strict' ;

{
  const menuItems = document.querySelectorAll('.menu1 li a');
  const contents = document.querySelectorAll('.content1');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      // aタグのリンクを実施されないようにする
      e.preventDefault();

      // 他のアクティブクラスを外す
      menuItems.forEach(item =>{
        item.classList.remove('active')
      });
      // クリックしたらactiveになるように変更する
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}
'user strict' ;

{
  const menuItems = document.querySelectorAll('.menu2 li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      // aタグのリンクを実施されないようにする
      e.preventDefault();

      // 他のアクティブクラスを外す
      menuItems.forEach(item =>{
        item.classList.remove('active')
      });
      // クリックしたらactiveになるように変更する
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}

