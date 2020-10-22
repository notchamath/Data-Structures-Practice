//creating a hash table from scratch
//hash tables are good/fast in terms of searches/lookups, inserts and deletes
//might be bad for space complexity and key iteration may be slow. Also unordered in memory.
class HashTable{

    //constructor
    constructor(size){
      this.data = new Array(size);
    }
  
    //create the Idempotent
     _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    //set method adds values to hash table
    set(key, val){
      
      //get the address
      const address = this._hash(key);
  
      //if there is no data at this address, create an array there
      if(!this.data[address]){
        this.data[address] = [];
      }
  
      //push array of key and val to the array at address
      this.data[address].push([key, val]);
  
      return this.data;
    }
  
    //get method gets values from hash table
    get(key){
      
      //get address
      const address = this._hash(key);
  
      //if there is data at this address 
      if(this.data[address]){
  
        //loop through each of potential hash collisions that may exist at this address
        //if there are no hash collisions loop will only run once
        for(let i = 0; i < this.data[address].length; i++){
  
          if(this.data[address][i][0] === key){
            return this.data[address][i][1];
          }
  
        }
  
      }  
  
      //if there are no data at given address, return undefined
      return undefined;
    }
  }
  
  newHashTable = new HashTable(10);
  newHashTable.set('Superman', 'Kryptonite');
  newHashTable.set('Batman', 'No Prep Time');
  newHashTable.set('DCEU', 'Josh');
  
  console.log(newHashTable.get('Superman'));
  console.log(newHashTable.get('MCU'));
