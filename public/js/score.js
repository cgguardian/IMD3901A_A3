AFRAME.registerComponent('score', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            //object clicked
            Context_AF.colP();
            console.log('Success!');
        });
    },

    colP: function() {
        const Context_AF = this;
        //Colours:
        //#F44336 -> red
        //#2196F3 -> blue
        //#009688 -> teal
        //#E91E63 -> pink

        let turn = document.getElementById("turns")
        ts = turn.getAttribute('value');

        let scor = document.getElementById("score")

        let b13 = document.getElementById("1-1")
        c13 = b13.getAttribute('color');

        let b12 = document.getElementById("1-2")
        let b11 = document.getElementById("1-3")
        let b23 = document.getElementById("2-1")
        let b21 = document.getElementById("2-3")
        let b33 = document.getElementById("3-1")
        let b32 = document.getElementById("3-2")
        let b31 = document.getElementById("3-3")

        c12 = b12.getAttribute('color');
        c11 = b11.getAttribute('color');
        c23 = b23.getAttribute('color');
        c21 = b21.getAttribute('color');
        c33 = b33.getAttribute('color');
        c32 = b32.getAttribute('color');
        c31 = b31.getAttribute('color');

        if (c13 == c12){
            if (c13 == c11){
                if (c13 == c23){
                    if (c13 == c21){
                        if (c13 == c33){
                            if (c13 == c32){
                                if (c13 == c31){
                                    scor.setAttribute('value', 'WINNER! ' + ts + ' turns!');
                                }
                            }
                        }
                    }
                }
            }
        }

        //if ((c13 == c12) && (c13 == c11) && (c13 == c23) && (c13 == c21) && (c13 == c33) && (c13 == c32) && (c13 == c31)){
        //    scor.setAttribute('value', 'WINNER! ' + ts + ' turns!');
        //}

        //if (c13 = c12){
        //    scor.setAttribute('value', 'WINNER!');
        //}
        
        console.log('Success');
        let scene = document.querySelector('a-scene');
        scene.appendChild(b13);
        scene.appendChild(b12);
        scene.appendChild(b11);

        scene.appendChild(b23);
        scene.appendChild(b21);

        scene.appendChild(b33);
        scene.appendChild(b32);
        scene.appendChild(b31);

        scene.appendChild(scor);
    }
});