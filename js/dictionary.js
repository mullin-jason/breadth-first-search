function Dict(){
    this.dict = {};
}

Dict.prototype.fill = function(index, element){
    return this.dict[index] = element;
}



Dict.prototype.size = function(){
    var length = 0;
    for(var key in this.dict){
        length +=1;
    }
    return length;
}

Dict.prototype.has = function(index){
    for(var key in this.dict){
        if(this.dict.hasOwnProperty(index))
        {
            return true;
        }
    }
    return false;
}

Dict.prototype.get = function(key){
    return this.dict[key];
}

