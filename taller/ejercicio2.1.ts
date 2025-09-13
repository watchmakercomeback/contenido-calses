function HTMLTagsBalanced(HTML: string): boolean {
    let mochila: string[] = [];
    let etiquetas: { [key: string]: string } = { 
        '<b>': '</b>', 
        '<i>': '</i>', 
        '<div>': '</div>', 
        '<span>': '</span>', 
        '<p>': '</p>'
    };

    // 🔹 Extraer todas las etiquetas <...> de la cadena
    const tags = HTML.match(/<\/?[^>]+>/g) || [];

    for (let tag of tags) {
        if (tag in etiquetas) {
            // es apertura
            mochila.push(tag);
        } else if (Object.values(etiquetas).includes(tag)) {
            // es cierre
            if (mochila.length === 0) return false;
            let ultimo = mochila.pop();
            if (etiquetas[ultimo!] !== tag) return false;
        }
    }

    return mochila.length === 0;
}

// ✅ Pruebas
console.log(HTMLTagsBalanced("<b><i>Hola</i></b>"));       // true
console.log(HTMLTagsBalanced("<div><span></div></span>")); // false
console.log(HTMLTagsBalanced("<p><b>Texto</b></p>"));      // true
console.log(HTMLTagsBalanced("<p><b>Texto</p></b>"));      // false
