AFRAME.registerComponent('c2-3', {
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

        let b23 = document.getElementById("2-1")
        c23 = b23.getAttribute('color');

        let b13 = document.getElementById("1-1")
        b13.setAttribute('color', c23);

        let b21 = document.getElementById("2-3")
        b21.setAttribute('color', c23);

        
        console.log('Success');
        let scene = document.querySelector('a-scene');
        scene.appendChild(b13);

        scene.appendChild(b23);
        scene.appendChild(b21);

        scene.appendChild(turn);

        //+ + o
        //o o o
        //o + o
    }
});