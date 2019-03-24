AFRAME.registerComponent('c3-3', {
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

        let b33 = document.getElementById("3-1")
        c33 = b33.getAttribute('color');

        let b12 = document.getElementById("1-2")
        b12.setAttribute('color', c33);
        let b11 = document.getElementById("1-3")
        b11.setAttribute('color', c33);

        //let b22 = document.getElementById("2-2")
        //b22.setAttribute('color', c33);
        
        console.log('Success');
        let scene = document.querySelector('a-scene');
        scene.appendChild(b12);

        scene.appendChild(b11);

        //scene.appendChild(b22);

        scene.appendChild(b33);

        scene.appendChild(turn);
        
        //o o +
        //+ + o
        //+ o o
    }
});