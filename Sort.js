Array.prototype.insertionSort = function() {
    for (var i = 1; i < this.length; i++) {
        var j = i - 1,
            temp = this[i];
        while (j >= 0 && this[j] > temp) {
            this[j + 1] = this[j];
            this[j] = temp;
            console.log('i = ' + i, '、 j = ' + j, '、', this);
            j--;
        }
        console.log('--------------------------------->');
    };
    return this;
};

console.log([3, 1, 5, 22, 9, 0, 8].insertionSort());