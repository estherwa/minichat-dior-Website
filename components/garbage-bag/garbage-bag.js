Component({
  behaviors: ['wx://component-export'],
  export() {
    return { myField: 'myValue' }
  }
})