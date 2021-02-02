let	textNode;

const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,null,false)
const rExp = new RegExp('Jean-Luc Mélenchon', 'gi')
const rExp_bis = new RegExp('La République', 'gi')

const poupou = 'dighseidghseorghnridghserxidghsdoizgrshgoisrghsirdzghsoirguhseilrughsreugilhzglishzguilzd'
const rExp_poupou = new RegExp(poupou, 'gi')

const phrase = 'La République c\'est moi!'
const phrase_bis = 'Jean-Luc Mélanchon'

while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp, poupou);
    textNode.nodeValue = textNode.nodeValue.replace(rExp_bis, phrase_bis);
    textNode.nodeValue = textNode.nodeValue.replace(rExp_poupou, phrase);
}

document.title = document.title.replace(rExp, phrase);
