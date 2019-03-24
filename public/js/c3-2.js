AFRAME.registerComponent('c3-2', {
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

        let b32 = document.getElementById("3-2")
        c32 = b32.getAttribute('color');

        let b13 = document.getElementById("1-1")
        b13.setAttribute('color', c32);

        let b11 = document.getElementById("1-3")
        b11.setAttribute('color', c32);

        let b31 = document.getElementById("3-3")
        b31.setAttribute('color', c32);
        
        console.log('Success');
        let scene = document.querySelector('a-scene');
        scene.appendChild(b13);
        scene.appendChild(b11);

        scene.appendChild(b32);
        scene.appendChild(b31);

        scene.appendChild(turn);

        //+ o o
        //o o +
        //+ o +
    }
});