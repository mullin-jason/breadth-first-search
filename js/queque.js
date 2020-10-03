// FIFO implementation of a queque in javascript

function Queque(){
    this.elements = [];
}

// add data in 
Queque.prototype.enqueque = function(data){
    return this.elements.push(data);
}

// take data out
Queque.prototype.dequeque = function() {
    return this.elements.shift();
}

// empty check
Queque.prototype.isEmpty = function(){
    return this.elements.length == 0;
}

// look at first element in queque without changes being made
Queque.prototype.peek = function(){
    return ! this.isEmpty() ? this.elements[0] : undefined;
}

// get Queque length
Queque.prototype.length = function (){
    return this.elements.length;
}
