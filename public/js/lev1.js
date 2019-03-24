AFRAME.registerComponent('lev1', {
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

        //boxes
        let b13 = document.getElementById("1-1")
        b13.setAttribute('visible', true);
        let b12 = document.getElementById("1-2")
        b12.setAttribute('visible', true);
        let b11 = document.getElementById("1-3")
        b11.setAttribute('visible', true);

        let b23 = document.getElementById("2-1")
        b23.setAttribute('visible', true);
        let b21 = document.getElementById("2-3")
        b21.setAttribute('visible', true);

        let b33 = document.getElementById("3-1")
        b33.setAttribute('visible', true);
        let b32 = document.getElementById("3-2")
        b32.setAttribute('visible', true);
        let b31 = document.getElementById("3-3")
        b31.setAttribute('visible', true);

        //scoreboard
        let scb = document.getElementById("scorb")
        scb.setAttribute('visible', true);
        let tl = document.getElementById("til")
        tl.setAttribute('visible', true);
        let scr = document.getElementById("turns")
        scr.setAttribute('visible', true);
        let wn = document.getElementById("win")
        wn.setAttribute('visible', true);

        //intro titles
        let tt1 = document.getElementById("t1")
        tt1.setAttribute('visible', false);
        let tt2 = document.getElementById("t2")
        tt2.setAttribute('visible', false);
        let tt3 = document.getElementById("t3")
        tt3.setAttribute('visible', false);
        let ttp = document.getElementById("point")
        ttp.setAttribute('visible', false);

        //intro level select
        let lv1 = document.getElementById("lev-1")
        lv1.setAttribute('visible', false);
        let lv2 = document.getElementById("lev-2")
        lv2.setAttribute('visible', false);
        let lv3 = document.getElementById("lev-3")
        lv3.setAttribute('visible', false);

        
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

        scene.appendChild(scb);
        scene.appendChild(tl);
        scene.appendChild(scr);
        scene.appendChild(wn);

        scene.appendChild(tt1);
        scene.appendChild(tt2);
        scene.appendChild(tt3);
        scene.appendChild(ttp);

        scene.appendChild(lv1);
        scene.appendChild(lv2);
        scene.appendChild(lv3);
    }
});