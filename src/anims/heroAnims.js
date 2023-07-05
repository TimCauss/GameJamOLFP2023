const createHeroAnims = (anims) => {
  //voici un exemple d'animation :


  //JUMP:-----------------------------------
  anims.create({
    key: "heroJumpAnim", //On ajoute une key pour les futur références

    //On génére les frames:
    frames: anims.generateFrameNames("hero-jump-run", { //'hero' ici est la clé utilisée dans le Preloader>...atlas('hero'...
      start: 0, //numéro d'image de début
      end: 9, //numéro d'image de fin
      prefix: "Jump__00", //préfix du fichier
      suffix: ".png", //suffic du fichier (ici extension)
    }),
    frameRate: 10, //framerate de l'anim
    //repeat: -1, //-1 pour loop infinni inutile pour un jump
  });


};

export { createHeroAnims };