const arto ={
    name : 'mohamed ahmed',
    age: 22,
    greet: function(){
        console.log('hello my name is ' + this.name)
    }
}

setTimeout(arto.greet.bind(arto),1000)

export default arto