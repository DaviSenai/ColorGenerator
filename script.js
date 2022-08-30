
const App = {
    mode:0,
    currentPredefinedColor:0,
    
    nextColor() {
        if (this.mode == 0) {
            if (this.currentPredefinedColor >= this.predefinedColors.length-1) {
                this.currentPredefinedColor = 0;
            } else {
                this.currentPredefinedColor++;
            }
            document.getElementById("display").innerHTML = "background-color: " + this.predefinedColors[this.currentPredefinedColor];
            document.body.style.backgroundColor = this.predefinedColors[this.currentPredefinedColor];
        } else {
            let color = "#" + getHexDecimal(6)
            document.getElementById("display").innerHTML = "background-color: " + color;
            document.body.style.backgroundColor = color;
        }
    },

    predefinedColors:[
        "#ffcc00",
        "#fc0303",
        "#ff5500",
        "#1eff00",
        "#00ffcc",
        "#000dff"
    ]
};

function getHexDecimal(size) {
    let output = "";
    for (let i = 0; i < size; i++) {
        let num;
        do {
            num = Math.floor(Math.random()*100);
        } while (num > 15);
        switch (num) {
            case 10:
                output += "a";
                break;
            case 11:
                output += "b";
                break;
            case 12:
                output += "c";
                break;
            case 13:
                output += "d";
                break;
            case 14:
                output += "e";
                break;
            case 15:
                output += "f";
                break;
            default: output += num;
        }
    }
    return output;
}


document.querySelector("select").addEventListener('change', e => {
    let value = document.querySelector("select").value;
    if (value == "Pré-definido") {
        App.mode = 0;
        App.currentPredefinedColor = App.predefinedColors.length -1;
        App.nextColor();
    } else if (value == "Aleatório") {
        App.mode = 1;
    }
});

