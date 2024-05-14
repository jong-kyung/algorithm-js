//* 해시테이블(Hash Table)

// 해시테이블은 키와 값을 저장하는 데이터 구조로, 키를 통해 값을 빠르게 검색할 수 있다.
// 즉 자바스크립트의 객체와 같은 역할을 한다.

class HashTable {
  data = []; // capa로 제한
  constructor(capa) {
    // 공간복잡도 O(n)
    this.capa = capa; // 해시테이블의 크기
  }

  insert(key, value) {
    // 시간복잡도 O(1)
    const hash = hashF(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push({ key, value });
  }

  serach(key) {
    // 시간복잡도 O(N/hash의 크기)
    const hash = hashF(key);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          return this.data[hash][i].value;
        }
      }
    }
    return null;
  }

  update(key, value) {
    // 시간복잡도 O(N/hash의 크기)
    const hash = hashF(key);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          this.data[hash][i].value = value;
        }
      }
    }
  }

  delete(key) {
    // 시간복잡도 O(N/hash의 크기)
    const hash = hashF(key);
    if (this.data[hash]) {
      for (let i = 0; i < this.data[hash].length; i++) {
        if (this.data[hash][i].key === key) {
          this.data[hash][i].splice(i, 1);
        }
      }
    }
  }
}

function hashF() {
  return "";
}

const ht = new HashTable(30);
ht.insert(31, "hello");
ht.insert(61, "bye");
ht.insert(83, true);
ht.insert(115, 13);
console.log(ht.serach(61)); // 'bye'
console.log(ht.serach(99)); // null
ht.update(83, false);
ht.delete(31);
