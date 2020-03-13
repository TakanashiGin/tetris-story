




; スマホ用背景表示マクロ
[macro name="bgimg"]
[iscript]
mp.storage = '../bgimage/' + mp.storage;
tf.cdn = {
  height: 960,
  width: 1280 * (960/720),
  x: 0,
  y: 0
}
tf.cdn.x = (640-tf.cdn.width)/2;
[endscript]
[image name="%name" layer="0" storage="&mp.storage" x="&tf.cdn.x" y="&tf.cdn.y" width="&tf.cdn.width" height="&tf.cdn.height" time="%time" wait="%wait" zindex="%zindex"]
[endmacro]





@return
