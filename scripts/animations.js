const { styler, spring, listen, pointer, value } = window.popmotion;

const balls = document.querySelectorAll('.gallery-img');




balls.forEach(function(ball) {
    const divStyler = popmotion.styler(ball);
    const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);
    popmotion.listen(ball, "mousedown touchstart").start(e => {
        e.preventDefault();
        popmotion.pointer(ballXY.get()).start(ballXY);
      });

      popmotion.listen(document, "mouseup").start(() => {
        popmotion
          .spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            mass: 10,
            damping: 100
          })
          .start(ballXY);
      });
});



