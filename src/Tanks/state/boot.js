export default function bootState(){
    return{
        preload: function () {
            //load images for loading and stuff
        },
        create: function () {
            this.game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
            this.game.scale.pageAlignHorizontally = true; 
            this.game.scale.pageAlignVertically = true;

            this.game.renderer.renderSession.roundPixels = true;

            this.game.world.setBounds(0, 0, 992, 480);
            this.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.physics.arcade.gravity.y = 200;

            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;

            this.game.state.start('load');
        }
    }
}