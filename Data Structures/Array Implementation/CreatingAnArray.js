//this program creates an array from scratch as a Class on JS
//arrays are good for accessing items using indexes, push and pop
//bad for inserts and deletes

class MyArray {

  //constructor
  constructor(){
    this.length = 0;
    this.data = {};
  }

  //return data at given index
  get(index) {
    return this.data[index];
  }

  //add item to the end of array
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  //remove item from end of the array 
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1]
    this.length--;
    return lastItem;
  }

  //delete item with given index
  delete(index){
    const item = this.data[index];
    this._shiftItems(index);

    return item;
  }

  //should be a private method, manipulates array indexes('deletes' the index given)
  _shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}
  
  const newArray = new MyArray();
