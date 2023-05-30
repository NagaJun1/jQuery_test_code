
let a = 1;

// $(function(){ ~処理~ }) の書き方によって、HTML要素の読み込みが完了したタイミングで処理の実行が行える
$(function () {
    // セレクタと、css()メソッドの使用（"test02"の色を緑にする）
    $(".test02").css("color", "green");

    $(".test_button").click(function (event) {
        $(".test03").text("Button Click count = " + a);
        a++;
    });
});