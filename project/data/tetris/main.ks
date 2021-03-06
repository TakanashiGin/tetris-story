; =============================================================================
; 「最初に読み込まれるテトリスファイル」
;
; [html]~[endhtml]内をベースにmain.js,style.cssを編集してください
; [html]~[endhtml]内の<table></table>内を使えばあとはどう編集しても大丈夫のはず
;
; 《残りやること》
; 　・テトリミノ全種実装
; 　・操作中のテトリミノが一定時間停止したら次のテトリミノを表示
; 　・テトリミノが重なるやつの対策
; 　・下矢印・下ボタンではやく降りるやつ
; 　・テトリミノの回転
; 　・操作ボタン表示
; 　・ゲームオーバー => tyrano.plugin.kag.variable.sf.tetris.system.game_over();
; 　・スコア機能
; 　・ゲームクリア => tyrano.plugin.kag.variable.sf.tetris.system.game_clear();
; 　・次に表示されるテトリミノ（６個）
; 　・ホールド機能
; 　・列がすぐ消えるやつの対策
; 　・UI/UX
; =============================================================================





[iscript]
f.frame = 500;  // intervalを回す秒数 [ms]
f.score = 0;  // スコア
[endscript]
[loadjs storage="../tetris/system.js"]





[html top="190" left="0"]
<link rel="stylesheet" href="data/tetris/style.css">
<table id="game">
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<!--<script src="data/tetris/main.js" type="text/javascript"></script>-->
[endhtml]
[s]
