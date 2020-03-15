tyrano.plugin.kag.variable.sf.tetris = {





  system: {

    game_clear: function() {
      clearInterval(game_timer);
      $(window).off("keydown");
      tyrano.plugin.kag.ftag.startTag("jump",{storage:"../tetris/game-clear.ks"});
    },

    game_over: function() {
      clearInterval(game_timer);
      $(window).off("keydown");
      tyrano.plugin.kag.ftag.startTag("jump",{storage:"../tetris/game-over.ks"});
    }

  }





}
