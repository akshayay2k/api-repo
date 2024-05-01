// models/Collection.js
export default class Collection {
    constructor(name) {
      this.name = name;
      this.sets = [];
    }
  }
  
  // models/Set.js
  export default class Set {
    constructor(name) {
      this.name = name;
      this.folders = [];
    }
  }
  
  // models/Folder.js
  export default class Folder {
    constructor(name) {
      this.name = name;
      this.testSuites = [];
    }
  }
  
  // models/TestSuite.js
  export default class TestSuite {
    constructor(name) {
      this.name = name;
      this.headers = [];
      this.bodies = [];
      this.authorizations = [];
    }
  }
  
  // models/Header.js
  export default class Header {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  }
  
  // models/Body.js
  export default class Body {
    constructor(content) {
      this.content = content;
    }
  }
  
  // models/Authorization.js
  export default class Authorization {
    constructor(type, token) {
      this.type = type;
      this.token = token;
    }
  }
  