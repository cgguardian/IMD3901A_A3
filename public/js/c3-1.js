AFRAME.registerComponent('c3-1', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');
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
        tnum = parseInt(ts);
        tnum = tnum + 1;
        turn.setAttribute('value', tnum);

        let b31 = document.getElementById("3-3")
        c31 = b31.getAttribute('color');

        let b21 = document.getElementById("2-3")
        b21.setAttribute('color', c31);

        let b12 = document.getElementById("1-2")
        b12.setAttribute('color', c31);

        let b33 = document.getElementById("3-1")
        b33.setAttribute('color', c31);
        
        console.log('Success');
        let scene = document.querySelector('a-scene');

        scene.appendChild(b12);
        scene.appendChild(b21);
        scene.appendChild(b33);
        scene.appendChild(b31);

        scene.appendChild(turn);

        //o o +
        //+ o o
        //o + +
    }
});