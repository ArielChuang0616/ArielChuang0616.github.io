// menu hover
var mainItem = document.getElementsByClassName("mainItem");
for (let i = 0; i < mainItem.length; i++) {
    mainItem[i].onmouseenter = function(){
        this.classList.add('hoveredItem');
    }
        
    mainItem[i].onmouseleave = function(){
        setTimeout(function(){
            this.classList.remove('hoveredItem');
        }.bind(this),200)
    }
}