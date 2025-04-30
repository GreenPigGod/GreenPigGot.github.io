// ページを閉じる処理（ブラウザで許可されている場合のみ）
function closeWindow() {
    window.close();
}

// 自動的に閉じる（ブラウザで許可されない場合があるので注意）
setTimeout(function() {
    window.close();
}, 3000);
