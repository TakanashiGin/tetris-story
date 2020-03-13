

; setting
[iscript]
sf.title = "Tetris Story";
[endscript]
[title name="&sf.title"]
[stop_keyconfig]
[hidemenubutton]


; デバッグ用（パッケージ時には絶対にfalseに指定）
; 起動時にシステム変数を初期化
[iscript]
sf.start_clear_system = true;
[endscript]


; system file
@call storage="setting/system/system-main.ks"

; csv file
@call storage="setting/csv/csv-main.ks"

; param file
@call storage="setting/param/param-main.ks"

; call file
@call storage="setting/call/call-main.ks"

; character file
@call storage="setting/character/character-main.ks"

; ESC, F11
@key_event method="esc"
@key_event method="screen_full"


; -- test --
;@jump storage="test/01.ks"
; ----------


[iscript]
console.log('↓↓↓');
console.log('↓↓↓');
console.log('↓↓↓');
console.log('↓↓↓');
console.log('↓↓↓');
[endscript]



; layer setting
[layopt layer="message0" visible=false]
[layopt layer="message1" visible="false"]
[layopt layer="fix" visible="false"]
[layopt layer="0" visible="false"]
[layopt layer="1" visible="false"]
[layopt layer="2" visible="false"]


; test
;@jump storage="test/test.ks"
[layopt layer="message0" visible="true"]
[layopt layer="0" visible="true"]
[bgimg storage="room.jpg" time="1000" wait="true"]

タップでスタート。[p]

[layopt layer="message0" visible="false"]
[layopt layer="0" visible="false"]





[jump storage="../tetris/main.ks"]
