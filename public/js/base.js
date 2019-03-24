AFRAME.registerComponent('base', {
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

        //c# = b#.getAttribute('color');

        let b13 = document.getElementById("1-1")
        b13.setAttribute('color', c);
        let b12 = document.getElementById("1-2")
        b12.setAttribute('color', c);
        let b11 = document.getElementById("1-3")
        b11.setAttribute('color', c);

        let b23 = document.getElementById("2-1")
        b23.setAttribute('color', c);
        let b21 = document.getElementById("2-3")
        b21.setAttribute('color', c);

        let b33 = document.getElementById("3-1")
        b33.setAttribute('color', c);
        let b32 = document.getElementById("3-2")
        b32.setAttribute('color', c);
        let b31 = document.getElementById("3-3")
        b31.setAttribute('color', c);
        
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

        scene.appendChild(turn);

        //o o o
        //o o o
        //o o o

        //done-----------------------------------

        //1-1 YES
        //1-2 YES
        //1-3 YES

        //2-1 YES
        //2-3 YES

        //3-1 YES
        //3-2 YES
        //3-3 YES

        //---------------------------------------

        //pink: 2-1, 3-3, 3-2
        //teal: 3-1, 1-3, 3-2, 1-1
        //blue: 2-3, 3-2, 1-2, 1-1
        //red: 1-1, 1-3, 3-2, 2-3 
    }
});