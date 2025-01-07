import * as me from 'melonjs'
import { Player } from '../entities/player';
import { Terminator } from '../entities/terminator';
import Poop from '../entities/poop';

export class PlayScreen extends me.Stage {
  /**
   *  action to perform on state change
   */
  onResetEvent() {
    me.level.load("level1");

    me.game.world.addChild(new me.ColorLayer("background", "#000033"), 0);

    me.game.world.addChild(new Player(0, 280), 1);

    me.game.world.addChild(new Terminator(100, 280), 1);

    // me.game.world.addChild(new Terminator(300, 192), 1);
    // me.game.world.addChild(new Terminator(310, 192), 1);

  }
}
