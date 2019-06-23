require("../css/photon.min.css");
require("../css/app.css");
require("../css/playlist.css");

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import { Howl, Howler } from "howler";
import * as Mousetrap from "mousetrap";

/* ****** Player ******* */

var thePlayer = new Howl({ src: [""] });
var thePlayingSongId: number;
var theUpNextSongPath: string;

Mousetrap.bind("p", function() {
  playOrPause();
});
Mousetrap.bind("s", function() {
  stop();
});

Howler.volume(1.0);

function playOrPause() {
  if (thePlayer.playing(thePlayingSongId)) {
    pause();
  } else {
    play();
  }
}

function pause() {
  thePlayer.pause(thePlayingSongId);
}

function play() {
  if (theUpNextSongPath !== "") {
    thePlayer = new Howl({
      src: [theUpNextSongPath]
    });

    thePlayer.on("fade", id => {
      thePlayer.stop(id);
    });

    thePlayingSongId = thePlayer.play();
    theUpNextSongPath = "";
  }
}

function stop() {
  thePlayer.fade(1, 0, 3000, thePlayingSongId);
  thePlayingSongId = -1;
}
