AFRAME.registerComponent('c1-3', {
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

        let b13 = document.getElementById("1-1")
        c13 = b13.getAttribute('color');

        let b11 = document.getElementById("1-3")
        b11.setAttribute('color', c13);

        let b21 = document.getElementById("2-1")
        b21.setAttribute('color', c13);

        let b32 = document.getElementById("3-2")
        b32.setAttribute('color', c13);
        
        console.log('Success');
        let scene = document.querySelector('a-scene');
        scene.appendChild(b13);
        scene.appendChild(b11);
        scene.appendChild(b21);
        scene.appendChild(b32);

        scene.appendChild(turn);

        //+ + o
        //o o +
        //+ o o
    }
});